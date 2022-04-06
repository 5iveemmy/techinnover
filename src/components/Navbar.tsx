import styled from "styled-components";
import React from "react";
import { Container } from "../globalStyles";
import arrowDown from "../assets/arrowDown.svg";

const Nav = styled.nav``;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;

const NavLeft = styled.h3`
  font-size: 20px;
  font-weight: 700;
  align-self: center;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 790px;
`;

const NavMiddle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 321px;
`;

const NavMidList = styled.li`
  cursor: pointer;
`;

const NmlIcon = styled.img`
  padding-left: 12px;
`;

const NavRight = styled.div`
  width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const In = styled.p``;

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
  return (
    <Nav>
      <NavbarContainer>
        <NavLeft>AR SHAKIR</NavLeft>
        <NavMenu>
          <NavMiddle>
            <NavMidList>
              Product
              <NmlIcon src={arrowDown} alt="icon" />
            </NavMidList>
            <NavMidList>
              Template <NmlIcon src={arrowDown} alt="icon" />
            </NavMidList>
            <NavMidList>Blog</NavMidList>
            <NavMidList>Pricing</NavMidList>
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
