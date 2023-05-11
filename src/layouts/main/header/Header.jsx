import { useState } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Wrap>
        <Gnb>
          <Logo>ahreum</Logo>
          <div>
            <Nav>
              <ul>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#skill">SKILLS</a>
                </li>
                <li>
                  <a href="#develop">DEVELOP</a>
                </li>
                <li>
                  <a href="#project">PROJECT</a>
                </li>
              </ul>
            </Nav>
          </div>
        </Gnb>
      </Wrap>
      <SideWrap>
        <HamBtn open={showMenu} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamBtn>

        {menuOpen && <SideMenu setMenuOpen={setMenuOpen}></SideMenu>}
      </SideWrap>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: ${({ theme }) => theme.fonts.font_color};
  font-size: ${({ theme }) => theme.fonts.fontMicro};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
const Gnb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  width: 10%;
  font-size: 1rem;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      font-size: 15px;
      font-weight: ${({ theme }) => theme.colors.weightSemiBold};
      a {
        color: ${({ theme }) => theme.colors.white_color};
      }
    }
  }
`;

const SideWrap = styled.div`
  z-index: 5;
  display: block;
  position: fixed;
  top: 0;
  left: 10%;
  background: #0c1017;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  transform: ${({ menuOpen }) => (!menuOpen ? "translateX(0)" : "translateX(100%)")};
`;

const HamBtn = styled.button`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  z-index: 10;
  transition: all 0.3s;

  &:focus {
    outline: none;
  }

  span {
    display: block;

    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;

    transition: all 0.3s;
    position: relative;
    transform-origin: 1px;

    &:nth-child(1) {
      top: ${({ menuOpen }) => (menuOpen ? "18px" : "0")};
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(135deg)" : "0")};
    }

    &:nth-child(2) {
      top: ${({ menuOpen }) => (menuOpen ? "0" : "18px")};
      opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
      left: ${({ menuOpen }) => (menuOpen ? "-60px" : "0")};
    }

    &:nth-child(3) {
      top: ${({ menuOpen }) => (menuOpen ? "18px" : "36px")};
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(-135deg)" : "0")};
    }
  }
`;
