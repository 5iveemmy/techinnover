import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    color: #000000;   
    font-size: 14px;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 475px) {
    padding-right: 38px;
    padding-left: 38px;
  }
`;

interface BtnProps {
  round?: boolean;
  smallFont?: boolean;
  bold?: boolean;
  big?: boolean;
}

export const Button = styled.button<BtnProps>`
  border-radius: ${({ round }) => (round ? "47px" : "7px")};
  font-size: ${({ smallFont }) => (smallFont ? "14px" : "16px")};
  background-color: #3734a9;
  color: #ffffff;
  box-shadow: 0px 67px 80px rgba(55, 52, 169, 0.07),
    0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481),
    0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185),
    0px 13.4px 13px rgba(55, 52, 169, 0.035),
    0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815),
    0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519);
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  width: ${({ big }) => (big ? "162px" : "137px")};
  border: none;
  padding: 16px 35px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

export default GlobalStyle;
