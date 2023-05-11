import styled from "styled-components";
import { useEffect, useState } from "react";
// import SectionAbout from "./section/SectionAbout";
import SectionMain from "./section/SectionMain";
import SectionDevelop from "./section/SectionDevelop";
// import Animation from "./section/Animation";
import SectionProject from "./section/SectionProject";

import SectionProfile from "./section/SectionProfile";
function Main() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <Container id="main">
      <Wrap>{BtnStatus && <TopBtn onClick={handleTop}>TOP</TopBtn>}</Wrap>

      <SectionMain />
      <SectionProfile />
      {/* <SectionSkill /> */}
      {/* <SectionSkills /> */}
      {/* <SectionAbout /> */}
      <SectionDevelop />
      {/* <Animation /> */}
      <SectionProject />
      {/* <SectionSkill /> */}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.white_color};
`;

const Wrap = styled.div`
  /* position: relative;
  padding: 30px;
  font-size: 18px;
  line-height: 1.6;
  background: lightgray; */
`;

const TopBtn = styled.button`
  position: fixed;
  bottom: 5%;
  right: 2%;
  opacity: ${({ BtnStatus }) => (BtnStatus ? "0" : "1")};
  z-index: ${({ BtnStatus }) => (BtnStatus ? "-10" : "10")};
  display: block;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  transition: all 0.3s;
  font-size: 14px;

  font-weight: 700;
  line-height: 50px;
  color: #0c1017;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.blue_color};
    color: #fff;

    border-color: ${({ theme }) => theme.colors.blue_color};
  }
`;
