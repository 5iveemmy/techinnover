import { useState } from "react";
import styled from "styled-components";
import { Button } from "../globalStyles";
import { FaBars, FaTimes } from "react-icons/fa";
import arrowDown from "../assets/arrowDown.svg";
import { Link } from "react-router-dom";

interface IProps {
  clicked: boolean;
}

const Nav = styled.nav``;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 60px;
  padding-right: 60px;
  position: relative;

  @media screen and (max-width: 571px) {
    padding-right: 38px;
    padding-left: 38px;
  }
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
    height: 100vh;
    position: absolute;
    top: 70px;
    left: ${({ clicked }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3734a9;
    z-index: 9999;
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

    &:hover {
      transform: scale(1.1);
      transition: 0.4s ease-in-out;
    }
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
  cursor: pointer;
  @media screen and (max-width: 960px) {
    margin-top: -9rem;
    color: #ffffff;
  }
`;

const Free = styled.div``;

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
              <Button smallFont>Start Free</Button>
            </Free>
          </NavRight>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
