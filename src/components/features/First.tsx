import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import tot from "../../assets/tot.svg";
import { FeatCont, FrBtnWrap, FrH, FrP, FsH } from "./styles";

const FirstDiv = styled.div``;

const FirstWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7rem;
`;

const FirstLeft = styled.div``;

const FirstImg = styled.img`
  width: 710px;
`;

const First = () => {
  return (
    <FirstDiv>
      <Container>
        <FirstWrap>
          <FirstLeft>
            <FirstImg src={tot} />
          </FirstLeft>
          <FeatCont>
            <FrH>OUR FEATURE</FrH>
            <FsH>Receive payments quickly from anywhere</FsH>
            <FrP>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </FrP>
            <FrBtnWrap>
              <Button bold big>
                Get Started
              </Button>
            </FrBtnWrap>
          </FeatCont>
        </FirstWrap>
      </Container>
    </FirstDiv>
  );
};

export default First;
