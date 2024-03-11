import { InputType } from "@/hooks/useInput"
import styled from "styled-components"
import AuthInput from "../authInput"
import { FormType } from "."

interface EmailProps {
    onNext: () => void;
    form: FormType;
    onChange: (e: InputType) => void 
}

const Email = ({ onNext, form, onChange }: EmailProps) => {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    const emailValidChk = (email: string) => {
        if (pattern.test(email) === false && !!email) { return false; }
        else { return true; }
    }
    return (
        <EmailArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <form>
                <InputWrapper>
                    <AuthInput label="이메일" value={form.email} name="email" onChange={onChange} />
                    {!emailValidChk(form.email) && <ErrorMessage>이메일 형식이 올바르지 않아요</ErrorMessage>}
                </InputWrapper>
                <ConfirmBtn disabled={!form.email || !emailValidChk(form.email)} onClick={onNext}>다음</ConfirmBtn>
            </form>
        </EmailArea>
    )
}

const EmailArea = styled.div`
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
    margin-top: 240px;
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

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.Error500};
    font: ${({ theme }) => theme.fonts.TextSm14};
`
export default Email