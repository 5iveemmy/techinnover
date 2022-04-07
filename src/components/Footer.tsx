import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../globalStyles";

const ForFooter = styled.footer`
  background-color: #1b1c31;
  color: #ffffff;
`;

const FooterWrap = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FootAr = styled.div`
  width: 40%;
  @media screen and (max-width: 1200px) {
    width: auto;
    padding-bottom: 20px;
  }
`;

const FootArTExt = styled.h2`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 16px;
`;

const FootArPara = styled.p`
  opacity: 0.4;
  font-weight: 500;
  line-height: 26px;
`;

const FooterSub = styled.div`
  display: flex;
  justify-content: space-between;
  width: 577px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-right: 30px;
  }
`;

const FooterLinkTitle = styled.h2`
  font-weight: 700;
  font-size: 21px;
  padding-bottom: 35px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding-bottom: 18px;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #404444;
`;

const FooterBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const FooterBtLeft = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterBtRight = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <ForFooter>
      <Container>
        <FooterWrap>
          <FootAr>
            <FootArTExt>AR SHAKIR</FootArTExt>
            <FootArPara>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </FootArPara>
          </FootAr>
          <FooterSub>
            <FooterLinkItem>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Pricing</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Product</FooterLinkTitle>
              <FooterLink to="/">Invoicing Platform</FooterLink>
              <FooterLink to="/">Accounting Platform</FooterLink>
              <FooterLink to="/">Create Proposal</FooterLink>
              <FooterLink to="/">Contacts</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink to="/">Proposal Template</FooterLink>
              <FooterLink to="/">Invoice Tempalte</FooterLink>
              <FooterLink to="/">Tutorial</FooterLink>
              <FooterLink to="/">How to write a contract</FooterLink>
            </FooterLinkItem>
          </FooterSub>
        </FooterWrap>
      </Container>
      <FooterBottom>
        <FooterBottomWrap>
          <FooterBtLeft>
            2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
            Services
          </FooterBtLeft>
          <FooterBtRight>Supported by Microsoft Startup</FooterBtRight>
        </FooterBottomWrap>
      </FooterBottom>
    </ForFooter>
  );
};

export default Footer;
