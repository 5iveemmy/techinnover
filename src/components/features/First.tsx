import styled from "styled-components";
import { Container } from "../../globalStyles";
import tot from "../../assets/tot.svg";

const FirstDiv = styled.div``;

const FirstWrap = styled.div``;

const FirstLeft = styled.div``;

const FirstImg = styled.img``;

const First = () => {
  return (
    <FirstDiv>
      <Container>
        <FirstWrap>
          <FirstLeft>
            <FirstImg src={tot} />
          </FirstLeft>
          <FirstRight>
            <FrH>OUR FEATURE</FrH>
            <FsH>Receive payments quickly from anywhere</FsH>
            <FrP>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </FrP>
            <FrBtnWrap>
              <FrBtn>Get Started</FrBtn>
            </FrBtnWrap>
          </FirstRight>
        </FirstWrap>
      </Container>
    </FirstDiv>
  );
};

export default First;
