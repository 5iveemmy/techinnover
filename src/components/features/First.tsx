import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
// import tot from "../../assets/tot.svg";
import { FeatCont, FrBtnWrap, FrH, FrP, FsH } from "./styles";

interface FeatProps {
  imgStart?: boolean;
}

interface FirstProps {
  img?: string;
  headText?: string;
  subText?: string;
  para?: string;
  buttonLabel?: string;
  imgStart?: boolean;
}

const FirstDiv = styled.div``;

const FirstWrap = styled.div<FeatProps>`
  display: flex;
  justify-content: space-between;
  padding-top: 7rem;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FirstLeft = styled.div``;

const FirstImg = styled.img`
  width: 710px;

  @media screen and (max-width: 768px) {
    width: 550px;
  }

  @media screen and (max-width: 571px) {
    width: 100%;
  }
`;

const First = ({
  img,
  headText,
  subText,
  para,
  imgStart,
  buttonLabel,
}: FirstProps) => {
  return (
    <FirstDiv>
      <Container>
        <FirstWrap imgStart={imgStart}>
          <FirstLeft>
            <FirstImg src={img} />
          </FirstLeft>
          <FeatCont>
            <FrH>{headText}</FrH>
            <FsH>{subText}</FsH>
            <FrP>{para}</FrP>
            <FrBtnWrap>
              <Button bold big>
                {buttonLabel}
              </Button>
            </FrBtnWrap>
          </FeatCont>
        </FirstWrap>
      </Container>
    </FirstDiv>
  );
};

export default First;
