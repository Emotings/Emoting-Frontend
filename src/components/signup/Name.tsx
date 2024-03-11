import { InputType } from "@/hooks/useInput";
import styled from "styled-components";
import AuthInput from "../authInput";
import { FormType } from ".";

interface NameProps {
    onNext: () => void;
    form: FormType;
    onChange: (e: InputType) => void
}

const Name = ({ onNext, form, onChange }: NameProps) => {
    return (
        <NameArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <form>
                <AuthInput label="닉네임(별명)" value={form.nickname} name="nickname" onChange={onChange} />
                <ConfirmBtn disabled={!form.nickname} onClick={onNext} >다음</ConfirmBtn>
            </form>
        </NameArea>
    )
}

const NameArea = styled.div`
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
export default Name;