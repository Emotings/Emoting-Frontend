import { useInput } from "@/hooks/useInput";
import styled from "styled-components";
import AuthInput from "../authInput";

interface PasswordProps {
    onNext: () => void
}

const Password = ({ onNext }: PasswordProps) => {
    const { onChange, form } = useInput("")
    const { onChange: onChangeRePassword, form: rePassword } = useInput("")
    return (
        <PasswordArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <AuthInput label="비밀번호" value={form} onChange={onChange} type="password" />
            <AuthInput label="비밀번호 확인" value={rePassword} onChange={onChangeRePassword} type="password" />
            <ConfirmBtn disabled={!form || form !== rePassword} onClick={onNext}>다음</ConfirmBtn>
        </PasswordArea>
    )
}

const PasswordArea = styled.div`
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
`

const ConfirmBtn = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 360px;
    height: 52px;
    margin-top: 154px;
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
export default Password