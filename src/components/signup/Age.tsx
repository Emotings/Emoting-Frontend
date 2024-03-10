import styled from "styled-components";
import AuthInput from "../authInput";
import { InputType, useInput } from "@/hooks/useInput";
import { FormType } from ".";

interface AgeProps {
    onNext: () => void;
    form: FormType;
    onChange: (e: InputType) => void
}

const Age = ({ onNext, form, onChange }: AgeProps) => {
    return (
        <AgeArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <form>
                <AuthInput type="number" label="나이" isAgeText value={form.age} name="age" onChange={onChange} />
                <ConfirmBtn disabled={!form.age} onClick={onNext}>다음</ConfirmBtn>
            </form>
        </AgeArea>
    );
};

const AgeArea = styled.div`
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
`;

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

export default Age;
