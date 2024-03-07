import { Profile, PlusPhoto } from "@/assets";
import { useInput } from "@/hooks/useInput";
import styled from "styled-components";

const Img = () => {
    const { form: userPhoto, setForm: setUserPhoto } = useInput<File>()
    const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
            if (files.length === 0) {
                return;
            } else {
                setUserPhoto(files[0]);
            }
        }
    };
    return (
        <ImgArea>
            <a>Emoting</a>
            <p>소통에 간단함을 더하다</p>
            <ImgLabel>
                <ProfileImg src={!!userPhoto ? URL.createObjectURL(userPhoto) : Profile} />
                <PlusPhotoImg src={PlusPhoto} />
                <ImgInput type="file" onChange={saveImgFile} />
            </ImgLabel>
            <NextTimeButton>나중에 하기</NextTimeButton>
            <ConfirmBtn disabled={!userPhoto}>다음</ConfirmBtn>
        </ImgArea>
    )
}

const ImgArea = styled.div`
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

const ImgLabel = styled.label`
    margin: 48px 0 125px 0;
    position: relative;
`

const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`

const PlusPhotoImg = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`

const ImgInput = styled.input`
    display: none;
    margin-top: 48px;
`

const NextTimeButton = styled.button`
    width: 360px;
    height: 52px;
    border: 1px solid ${({ theme }) => theme.colors.Main500};
    border-radius: 12px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.Main500};
    font: ${({ theme }) => theme.fonts.TextSm18};
    background-color: white;
    cursor: pointer;
`

const ConfirmBtn = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 360px;
    height: 52px;
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

export default Img;