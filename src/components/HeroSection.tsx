import styled from "styled-components";
import { Button, Container } from "../globalStyles";
import play from "../assets/play.svg";
import smile from "../assets/girlOnPhone.svg";
import zep from "../assets/zep.svg";
import oracle from "../assets/oracle.svg";
import morph from "../assets/morph.svg";
import sam from "../assets/sam.svg";
import mon from "../assets/mon.svg";
import seg from "../assets/seg.svg";
import top from "../assets/TopLine.svg";
import down from "../assets/DownLine.svg";

const HeroSect = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroSectContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  align-items: center;
  ${Container};
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeroLeft = styled.div`
  @media screen and (max-width: 1200px) {
    padding-bottom: 5rem;
  }
`;

const Manag = styled.p`
  font-weight: 800;
  font-size: 60px;
  letter-spacing: -0.03em;
  line-height: 80px;
  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const End = styled.p`
  color: #64607d;
  font-size: 20px;
  letter-spacing: -0.02em;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 446px;
  line-height: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 18px;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroBtns = styled.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const GetWrap = styled.div``;

const Shiw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 205px;

  @media screen and (max-width: 500px) {
    padding-top: 20px;
  }
`;

const ShiwText = styled.p`
  color: #3734a9;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-size: 17px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const PlayWrap = styled.div`
  background: #22d497;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 100px 80px rgba(34, 212, 151, 0.07),
    0px 64.8148px 46.8519px rgba(34, 212, 151, 0.0531481),
    0px 38.5185px 25.4815px rgba(34, 212, 151, 0.0425185),
    0px 20px 13px rgba(34, 212, 151, 0.035),
    0px 8.14815px 6.51852px rgba(34, 212, 151, 0.0274815),
    0px 1.85185px 3.14815px rgba(34, 212, 151, 0.0168519);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

const Play = styled.img`
  width: 25px;
  height: 25px;
`;

const HeroRight = styled.div``;

const HeroImage = styled.img`
  width: 647px;
  height: 549px;
  @media screen and (max-width: 1200px) {
    width: 550px;
  }

  @media screen and (max-width: 571px) {
    width: 100%;
  }
`;

const Promo = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const PromoWrap = styled.div`
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
`;

const PromoHead = styled.h3`
  font-size: 22px;
  line-height: 30px;
  padding-bottom: 40px;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ForLogos = styled.div`
  padding: 20px;
`;

const Ozp = styled.img``;
const Mor = styled.img``;
const Ora = styled.img``;
const Sam = styled.img``;
const Mon = styled.img``;
const Seg = styled.img``;

export const TopLine = styled.img`
  position: absolute;
  z-index: 1;
`;

const Promos = () => {
  return (
    <Promo>
      <Container>
        <PromoWrap>
          <PromoHead>
            Over 32k+ software businesses growing with AR Shakir
          </PromoHead>
          <Logos>
            <ForLogos>
              <Ozp src={zep} alt="Open Zeppelin" />
            </ForLogos>
            <ForLogos>
              <Ora src={oracle} alt="Oracle" />
            </ForLogos>
            <ForLogos>
              <Mor src={morph} alt="Morpheus" />
            </ForLogos>
            <ForLogos>
              {" "}
              <Sam src={sam} alt="Samsung" />
            </ForLogos>
            <ForLogos>
              {" "}
              <Mon src={mon} alt="Monday" />
            </ForLogos>
            <ForLogos>
              {" "}
              <Seg src={seg} alt="Segment" />
            </ForLogos>
          </Logos>
        </PromoWrap>
      </Container>
    </Promo>
  );
};

const HeroSection = () => {
  return (
    <>
      <HeroSect>
        <TopLine src={top} alt="Lines" />
        <TopLine src={down} alt="Lines" />
        <HeroSectContainer>
          <HeroLeft>
            <Manag>Managing business payments has never been easier</Manag>
            <End>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize
            </End>
            <HeroBtns>
              <GetWrap>
                <Button round bold big>
                  Get Started
                </Button>
              </GetWrap>
              <Shiw>
                <PlayWrap>
                  <Play src={play} alt="play" />
                </PlayWrap>
                <ShiwText>See How It Works</ShiwText>
              </Shiw>
            </HeroBtns>
          </HeroLeft>
          <HeroRight>
            <HeroImage src={smile} alt="Girl On Phone" />
          </HeroRight>
        </HeroSectContainer>
      </HeroSect>
      <Promos />
    </>
  );
};

export default HeroSection;
