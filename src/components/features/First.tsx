import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import { TopLine } from "../HeroSection";
import top from "../../assets/TopLine.svg";
import {
  FeatureContent,
  FeatureBtnWrap,
  FeatureHeader,
  FeaturePara,
  FeatureSubText,
} from "./styles";

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

const FirstDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

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

const FirstLeft = styled.div`
  z-index: 10;
`;

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
      <TopLine src={top} alt="Lines" />
      <Container>
        <FirstWrap imgStart={imgStart}>
          <FirstLeft>
            <FirstImg src={img} />
          </FirstLeft>
          <FeatureContent>
            <FeatureHeader>{headText}</FeatureHeader>
            <FeatureSubText>{subText}</FeatureSubText>
            <FeaturePara>{para}</FeaturePara>
            <FeatureBtnWrap>
              <Button bold big>
                {buttonLabel}
              </Button>
            </FeatureBtnWrap>
          </FeatureContent>
        </FirstWrap>
      </Container>
    </FirstDiv>
  );
};

export default First;
