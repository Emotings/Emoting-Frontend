import { Google, KakaoTalk, Naver } from "@/assets";
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useInput } from '@/hooks/useInput';
import AuthInput from '../authInput';
import { useLogin } from "@/utils/apis/auth";

interface LoginFormType {
    email: string;
    password: string;
}

const Login = () => {
    const { form, onChange } = useInput<LoginFormType>({
        email: "",
        password: ""
    })
    const {email, password} = form
    const { mutate } = useLogin()
    return (
        <LoginArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <AuthInput label="이메일" value={email} onChange={onChange} name="email" />
            <AuthInput label="비밀번호" value={password} onChange={onChange} name="password" type="password" />
            <ConfirmBtn disabled={!email || !password}
                onClick={() => mutate(form)}>로그인</ConfirmBtn>
            <Link to="/signup"><SignupBtn>회원가입하기</SignupBtn></Link>
            <OauthArea>
                <img src={KakaoTalk} />
                <img src={Naver} />
                <img src={Google} />
            </OauthArea>
        </LoginArea >
    )
};

const LoginArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    a {
        font: ${({ theme }) => theme.fonts.TitleMd};
    }
    p {
        font: ${({ theme }) => theme.fonts.TextMd};
        margin-top: 8px;
    }
`;


const ConfirmBtn = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 360px;
    height: 52px;
    margin: 54px 0 12px 0;
    border-radius: 12px;
    font-size: 18px;
    font-family: 'Pretendard';
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Main500};
    &:disabled{
    cursor: no-drop;
    color: ${({ theme }) => theme.colors.Gray};
    background-color: ${({ theme }) => theme.colors.GrayScale200};
    }
`;

const SignupBtn = styled.div`
    font: ${({ theme }) => theme.fonts.TextMd};
    color: ${({ theme }) => theme.colors.Main500};
    cursor: pointer;
    margin-bottom: 48px;
`

const OauthArea = styled.div`
    display: flex;
    gap: 20px;
    img {
        cursor: pointer;
    }
`;

export default Login;