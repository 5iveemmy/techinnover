import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 60px;
  padding-right: 60px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 571px) {
    padding-right: 38px;
    padding-left: 38px;
  }
`;

interface BtnProps {
  round?: boolean;
  smallFont?: boolean;
  bold?: boolean;
  big?: boolean;
  orangeShade?: boolean;
  org?: boolean;
}

export const Button = styled.button<BtnProps>`
  border-radius: ${({ round }) => (round ? "47px" : "7px")};
  font-size: ${({ smallFont }) => (smallFont ? "14px" : "16px")};
  background-color: ${({ org }) => (org ? "#FF7F5C" : "#3734a9")};
  color: #ffffff;
  box-shadow: ${({ orangeShade }) =>
    orangeShade
      ? "0px 100px 80px rgba(255, 127, 92, 0.07), 0px 64.8148px 46.8519px rgba(255, 127, 92, 0.0531481), 0px 38.5185px 25.4815px rgba(255, 127, 92, 0.0425185), 0px 20px 13px rgba(255, 127, 92, 0.035), 0px 8.14815px 6.51852px rgba(255, 127, 92, 0.0274815), 0px 1.85185px 3.14815px rgba(255, 127, 92, 0.0168519)"
      : "0px 67px 80px rgba(55, 52, 169, 0.07),0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481),0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185),0px 13.4px 13px rgba(55, 52, 169, 0.035),0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815),0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)"};
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  width: ${({ big }) => (big ? "162px" : "137px")};
  border: none;
  padding: 16px 35px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 14px 25px;
  }
`;

export default GlobalStyle;
