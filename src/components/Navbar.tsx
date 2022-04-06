import { useState } from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import { FaBars, FaTimes } from "react-icons/fa";
import arrowDown from "../assets/arrowDown.svg";
import { Link } from "react-router-dom";

interface IProps {
  clicked: boolean;
}

const Nav = styled.nav``;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  ${Container}
`;

const NavLeft = styled.h3`
  font-size: 20px;
  font-weight: 700;
  align-self: center;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, -8%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div<IProps>`
  display: flex;
  justify-content: space-between;
  width: 790px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 75px;
    left: ${({ clicked }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3734a9;
  }
`;

const NavLinks = styled(Link)`
  text-decoration: none;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #ffffff;
    opacity: 1;
    /* &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    } */
  }
`;

const NavMiddle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 321px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavMidList = styled.li`
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NmlIcon = styled.img`
  padding-left: 12px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavRight = styled.div`
  width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const In = styled.p`
  @media screen and (max-width: 960px) {
    margin-top: -9rem;
  }
`;

const Free = styled.div``;

const FreeBtn = styled.button`
  background-color: #3734a9;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  width: 137px;
  box-shadow: 0px 67px 80px rgba(55, 52, 169, 0.07),
    0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481),
    0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185),
    0px 13.4px 13px rgba(55, 52, 169, 0.035),
    0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815),
    0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519);
  border-radius: 7px;
  border: none;
  padding: 16px 35px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLeft>AR SHAKIR</NavLeft>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes size="32" /> : <FaBars size="32" />}
        </MobileIcon>
        <NavMenu onClick={handleClick} clicked={click}>
          <NavMiddle>
            <NavMidList>
              <NavLinks to="/">
                Product <NmlIcon src={arrowDown} alt="icon" />{" "}
              </NavLinks>
            </NavMidList>
            <NavMidList>
              <NavLinks to="/">
                Template <NmlIcon src={arrowDown} alt="icon" />
              </NavLinks>{" "}
            </NavMidList>
            <NavMidList>
              {" "}
              <NavLinks to="/">Blog</NavLinks>
            </NavMidList>
            <NavMidList>
              <NavLinks to="/">Pricing</NavLinks>
            </NavMidList>
          </NavMiddle>
          <NavRight>
            <In>Sign In</In>
            <Free>
              <FreeBtn>Start Free</FreeBtn>
            </Free>
          </NavRight>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
