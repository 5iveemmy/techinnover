import styled from "styled-components";
import { Container } from "../globalStyles";
import play from "../assets/play.svg";
import smile from "../assets/girlOnPhone.svg";

const HeroSect = styled.div``;

const HeroSectContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  align-items: center;
  ${Container}
`;

const HeroLeft = styled.div``;

const Manag = styled.p`
  font-weight: 800;
  font-size: 60px;
  letter-spacing: -0.03em;
  line-height: 80px;
`;

const End = styled.p`
  color: #64607d;
  font-size: 20px;
  letter-spacing: -0.02em;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 446px;
  line-height: 30px;
`;

const HeroBtns = styled.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GetWrap = styled.div``;

const GetBtn = styled.button`
  padding: 15px 35px;
  width: 162px;
  height: 60px;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: #3734a9;
  box-shadow: 0px 67px 80px rgba(55, 52, 169, 0.07),
    0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481),
    0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185),
    0px 13.4px 13px rgba(55, 52, 169, 0.035),
    0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815),
    0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519);
  border-radius: 47px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

const Shiw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 205px;
`;

const ShiwText = styled.p`
  color: #3734a9;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-size: 17px;
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
`;

const Promo = styled.div;

const PromoWrap = styled.div``;

const PromoHead = styled.h3``;

const Logos = styled.div``;

const Promos = () => {
  return (
    <Promo>
      <PromoWrap>
        <PromoHead>
          Over 32k+ software businesses growing with AR Shakir
        </PromoHead>
        <Logos>
          <Ozp />
        </Logos>
      </PromoWrap>
    </Promo>
  );
};

const HeroSection = () => {
  return (
    <>
      <HeroSect>
        <HeroSectContainer>
          <HeroLeft>
            <Manag>Managing business payments has never been easier</Manag>
            <End>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize
            </End>
            <HeroBtns>
              <GetWrap>
                <GetBtn>Get Started</GetBtn>
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
