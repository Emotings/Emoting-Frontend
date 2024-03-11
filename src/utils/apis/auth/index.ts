import { useNavigate } from "react-router-dom";
import { LoginRequestType, LoginResponseType, SignupRequestType } from "./type";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";

const path = "/auth";

export const useSignup = () => {
  const router = useNavigate();
  return useMutation({
    mutationFn: async (signupData: SignupRequestType) =>
      await instance.post(`${path}/signup`, signupData),
    onSuccess: () => {
      router("/login");
      alert("회원가입에 성공했습니다.");
    },
    onError: (err: AxiosError<AxiosError>) => {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            alert("정보를 다시 확인해 주세요.");
            break;
          case 401:
            alert("개발자에게 문의해 주세요.");
            break;
          case 409:
            alert("이미 존재하는 계정입니다.");
            break;
          case 500:
            alert("서버에러입니다 백엔드 잘못이요");
        }
      } else alert("네트워크 연결 상태를 확인해 주세요.");
    },
  });
};

export const useLogin = () => {
  const router = useNavigate();
  const [, setCookies] = useCookies();
  return useMutation({
    mutationFn: async (body: LoginRequestType) =>
      await instance.post<LoginResponseType>(`${path}/login`, body),
    onSuccess: (res) => {
      setCookies("access_token", res.data.accessToken);
      router("/main");
    },
    onError: (err: AxiosError<AxiosError>) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            alert('비밀번호를 다시 확인해주세요.');
            break;
          case 404:
            alert('아이디와 비밀번호를 다시 확인해주세요.');
            break;
          case 500:
            alert('아이디와 비밀번호를 다시 확인해주세요.');
            break;
        }
      } else {
        alert('아이디와 비밀번호를 다시 확인해주세요.');
      }
    },
  });
};
