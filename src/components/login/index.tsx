import { Google, KakaoTalk, Naver } from "@/assets";
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useInput } from '@/hooks/useInput';
import AuthInput from '../authInput';

const Login = () => {
    const { onChange: onChangeId, form: id } = useInput("")
    const { onChange: onChangePassword, form: password } = useInput("")
    return (
        <LoginArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <AuthInput label="아이디" value={id} onChange={onChangeId} />
            <AuthInput label="비밀번호" value={password} onChange={onChangePassword} type="password" />
            <ConfirmBtn disabled={!id || !password}>로그인</ConfirmBtn>
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