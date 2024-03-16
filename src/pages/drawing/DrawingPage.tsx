import React, { useRef, useState } from "react";
import styled from "styled-components";
import ArrowLeft from "@assets/ArrowLeft.svg?react";
import Eraser from "@/assets/Eraser.svg?react";
import Image from "@assets/Image.svg?react";
import Paint from "@assets/Paint.svg?react";
import Pencil from "@assets/Pencil.svg?react";
import Reset from "@assets/Reset.svg?react";
import Text from "@assets/Text.svg?react";
import theme from "@/utils/theme/Theme";

type Mode = "PENCIL" | "ERASER" | "PAINT" | "TEXT" | "IMAGE";

const DrawingPage = () => {
  const [mode, setMode] = useState<Mode>("PENCIL");
  const [color, setColor] = useState("");
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <DrawingHeader>
          <ArrowLeft cursor="pointer" />
          <HeaderRight>
            <Reset cursor="pointer" />
            <ConfirmText>완료</ConfirmText>
          </HeaderRight>
        </DrawingHeader>
        <BottomWrapper>
          <PenAttributes>
            <Range type="range" />
            <ColorWrapper>
              <Platte onClick={() => colorRef.current?.click()} />
              <SelectedColor color={color || "black"} />
              <input
                type="color"
                onChange={handleColorChange}
                ref={colorRef}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 100,
                  opacity: 0,
                }}
              />
            </ColorWrapper>
          </PenAttributes>
          <ModeWrapper>
            <Tool isClick={mode === "PENCIL"} onClick={() => setMode("PENCIL")}>
              <Pencil
                color={
                  mode === "PENCIL" ? theme.colors.White : theme.colors.Gray
                }
              />
            </Tool>
            <Tool isClick={mode === "ERASER"} onClick={() => setMode("ERASER")}>
              <Eraser
                color={
                  mode === "ERASER" ? theme.colors.White : theme.colors.Gray
                }
              />
            </Tool>
            <Tool isClick={mode === "PAINT"} onClick={() => setMode("PAINT")}>
              <Paint
                color={
                  mode === "PAINT" ? theme.colors.White : theme.colors.Gray
                }
              />
            </Tool>
            <Tool isClick={mode === "TEXT"} onClick={() => setMode("TEXT")}>
              <Text
                color={mode === "TEXT" ? theme.colors.White : theme.colors.Gray}
              />
            </Tool>
            <Tool isClick={mode === "IMAGE"} onClick={() => setMode("IMAGE")}>
              <Image
                color={
                  mode === "IMAGE" ? theme.colors.White : theme.colors.Gray
                }
              />
            </Tool>
          </ModeWrapper>
        </BottomWrapper>
      </Wrapper>
    </Container>
  );
};

export default DrawingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 68px;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
`;

const DrawingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
`;

const HeaderRight = styled.span`
  display: flex;
  align-items: center;
  gap: 24px;
  font: ${({ theme }) => theme.fonts.TextSm14};
`;

const ConfirmText = styled.span`
  color: ${({ theme }) => theme.colors.Main500};
  cursor: pointer;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PenAttributes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 384px;
  margin: 0 auto;
`;

const Range = styled.input`
  background-color: ${theme.colors.GrayScale200};
  padding: 4px 5px;
  width: 150px;
  border-radius: 8px;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 28px;
    border-radius: 4px;
    background: ${theme.colors.White};
    cursor: pointer;
  }
`;

const ColorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Platte = styled.div`
  width: 132px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(
    270deg,
    #f00 0%,
    #fea800 9.62%,
    #f9fe00 20.4%,
    #42ff00 30.1%,
    #00ffa3 39.63%,
    #0ff 50.41%,
    #06f 60.11%,
    #30f 70.17%,
    #db00ff 80.05%,
    #ff00e4 89.58%,
    #fb0000 100%
  );
`;

const SelectedColor = styled.div<{ color: string }>`
  width: 24px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
`;

const ModeWrapper = styled.div`
  width: 100%;
  max-width: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 36px 0;
  border-radius: 12px 12px 0 0;
  background-color: ${({ theme }) => theme.colors.GrayScale50};
  margin: 0 auto;
`;

const Tool = styled.div<{ isClick: boolean }>`
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme, isClick }) =>
    isClick ? theme.colors.Main500 : theme.colors.White};
  cursor: pointer;
`;
