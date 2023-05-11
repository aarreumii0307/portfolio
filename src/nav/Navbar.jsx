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
      <h1>KIMAHREUM PORTFOLIO</h1>
      <Wrap>
        <NavWrap>
          <Nav>
            <ul>
              <li>
                <a href="#main">HOME</a>
                <span></span>
              </li>
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
      </Wrap>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 400px;
  line-height: 300px;

  @media ${({ theme }) => theme.device.laptop} {
    position: fixed;
    height: 80px;
    line-height: 80px;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.tablet} {
    z-index: 50;
  }
  h1 {
    text-align: center;
    font-size: 6rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
`;

const NavWrap = styled.div`
  width: 100%;
  position: relative;
  /* position: fixed; */
`;

const Nav = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  display: flex;

  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  ul {
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      font-size: 15px;
      font-weight: 600;

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
