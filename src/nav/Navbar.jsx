import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const updateScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Container scroll={scroll}>
      <Wrap>
        <Gnb>
          <LogoWrap>
            <Logo href="#main">ahreum</Logo>
          </LogoWrap>
          <NavWrap>
            <Nav>
              <ul>
                <li>
                  <a href="#profile">PROFILE</a>
                  <span></span>
                </li>
                <li>
                  <a href="#develop">DEVELOP</a>
                  <span></span>
                </li>
                <li>
                  <a href="#project">REACT</a>
                  <span></span>
                </li>
              </ul>
            </Nav>
          </NavWrap>
          <RightNavWrap>
            <Burger />
          </RightNavWrap>
        </Gnb>
      </Wrap>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 80px;
  line-height: 80px;
  position: fixed;
  /* background: #e4dccf; */
  background: ${({ theme }) => theme.colors.white_color};
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  font-size: ${({ theme }) => theme.fonts.fontSmall};
  font-weight: ${({ theme }) => theme.fonts.weightBold};

  top: 0;
  z-index: 100;
  box-shadow: 0 2px 2px -2px #151515;
  @media ${({ theme }) => theme.device.laptop} {
    position: fixed;
    height: 80px;
    line-height: 80px;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.tablet} {
    z-index: 50;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 74%;
  margin: 0 auto;
`;
const Gnb = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.black_color};
  /* color: #576f72; */

  /* position: relative; */
  @media ${({ theme }) => theme.device.laptop} {
    transition: all 0.3s;

    /* position: fixed; */
  }
`;

const LogoWrap = styled.div`
  width: 10%;
`;
const Logo = styled.a`
  font-weight: 600;
  font-size: 22px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main_color};

  @media ${({ theme }) => theme.device.laptop} {
    font-weight: 600;
    font-size: 22px;
    /* 
    color: #fff; */
  }
`;

const NavWrap = styled.div`
  width: 100%;

  /* position: fixed; */
`;

const Nav = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      font-size: 15px;
      font-weight: ${({ theme }) => theme.colors.weightSemiBold};

      a {
        z-index: 2;
        /* color: ${({ theme }) => theme.colors.white_color}; */
        color: ${({ theme }) => theme.colors.black_color};
        position: relative;
        &::before {
          z-index: -1;
          content: "";
          position: absolute;
          left: 0%;
          top: 70%;
          width: 100%;
          height: 8px;
          box-shadow: inset 0px 0px 0px #0066ff;
          background: #5053582c;

          transition: all 0.2s cubic-bezier(0.5, 0.24, 0, 1);
        }
        &:hover {
          &::before {
            box-shadow: inset 600px 0px 0px ${({ theme }) => theme.colors.blue_color};
          }
        }
      }
    }
  }
`;

const RightNavWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.laptop} {
    right: 40px;
  }
`;

export default Navbar;
