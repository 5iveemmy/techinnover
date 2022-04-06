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

export default GlobalStyle;
