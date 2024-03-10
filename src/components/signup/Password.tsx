import { InputType } from "@/hooks/useInput";
import styled from "styled-components";
import AuthInput from "@components/authInput";
import { FormType } from ".";

interface PasswordProps {
    onNext: () => void
    form: FormType
    onChange: (e: InputType) => void
}

const Password = ({ onNext, form,onChange }: PasswordProps) => {
    return (
        <PasswordArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <form>
                <AuthInput name="password" label="비밀번호" value={form.password} onChange={onChange} type="password" />
                <AuthInput name="repassword" label="비밀번호 확인" value={form.repassword} onChange={onChange} type="password" />
                <ConfirmBtn disabled={!form.password || form.password !== form.repassword} onClick={onNext}>다음</ConfirmBtn>
            </form>
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
    form {
        display: flex;
        flex-direction: column;
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
    font: ${({ theme }) => theme.fonts.TextSm18};
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