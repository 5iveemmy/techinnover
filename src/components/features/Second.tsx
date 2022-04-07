import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FeatCont, FrH, FrP, FsH } from "./styles";
import birds from "../../assets/birds.svg";

const SecondDiv = styled.div`
  background-color: #f3f7fa;
  border-radius: 20px;
  margin: auto;
  position: relative;
`;

const SecondWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 75px 68px;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 571px) {
    padding: 75px 40px;
  }
`;

const GsFfWrap = styled.form`
  width: 356px;
  @media screen and (max-width: 571px) {
    width: 100%;
  }
`;

const GsFf = styled.h3`
  color: #3734a9;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  padding-bottom: 22px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const ForInput = styled.div`
  padding-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 20px;

  &::placeholder {
    color: #64607d;
    opacity: 0.4;
  }
`;

const GstBtnWrap = styled.div``;

const GstBtn = styled.div`
  background-color: #ff7f5c;
  color: #ffffff;
  border: none;
  box-shadow: 0px 67px 80px rgba(255, 127, 92, 0.07),
    0px 43.4259px 46.8519px rgba(255, 127, 92, 0.0531481),
    0px 25.8074px 25.4815px rgba(255, 127, 92, 0.0425185),
    0px 13.4px 13px rgba(255, 127, 92, 0.035),
    0px 5.45926px 6.51852px rgba(255, 127, 92, 0.0274815),
    0px 1.24074px 3.14815px rgba(255, 127, 92, 0.0168519);
  border-radius: 5px;
  padding: 16px 125px;

  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 571px) {
    padding: 16px 100px;
  }
`;

const Birds = styled.img`
  position: absolute;
  position: absolute;
  right: 0;
  top: -1.5rem;
`;

const Second = () => {
  return (
    <Container>
      <SecondDiv>
        <Birds src={birds} alt="Birds" />
        <SecondWrap>
          <FeatCont>
            <FrH>OUR FEATURE</FrH>
            <FsH>Receive payments quickly from anywhere</FsH>
            <FrP>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </FrP>
          </FeatCont>
          <GsFfWrap>
            <GsFf>Get Started for Free</GsFf>
            <ForInput>
              <Input type="email" placeholder="Email Address" />
            </ForInput>
            <ForInput>
              <Input type="passwork" placeholder="Password" />
            </ForInput>
            <GstBtnWrap>
              <GstBtn>Get Started</GstBtn>
            </GstBtnWrap>
          </GsFfWrap>
        </SecondWrap>
      </SecondDiv>
    </Container>
  );
};

export default Second;
