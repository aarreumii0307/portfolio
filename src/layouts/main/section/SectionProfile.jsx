import styled from "styled-components";

function SectionProfile() {
  return (
    <Container id="profile">
      <Wrap>
        <TitleWrap>
          <Title>
            <h4>01</h4>
            <h2>about</h2>
            {/* <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt, unde vel, ipsum nulla quos alias quidem velit vero est sed. Voluptate nihil distinctio maiores architecto
              corrupti, quam suscipit laudantium!
            </h3> */}
          </Title>
        </TitleWrap>
        <BgWrap>
          <Bg>
            <TextWrap>
              <Txt>
                <h3>PROFILE</h3>
                <div>
                  <ContentWrap>
                    <h4>name</h4>
                    <Content> 김아름</Content>
                  </ContentWrap>
                  <ContentWrap>
                    <h4>birth </h4>
                    <Content>1989.03.07</Content>
                  </ContentWrap>
                  <ContentWrap>
                    <h4>phon numner </h4>
                    <Content>010.2967.5037</Content>
                  </ContentWrap>
                  <ContentWrap>
                    <h4>e-mail</h4>
                    <Content>aarreum0307@gmail.com</Content>
                  </ContentWrap>
                </div>
              </Txt>
              <Txt>
                <h3>CAREER</h3>
                <ContentWrap>
                  <h4>2019.07 - 2021.08</h4>
                  <Content> (주)단비 빅데이터팀 / 빅데이터 시각화</Content>
                </ContentWrap>
              </Txt>
              <Txt>
                <h3>EDUCATION</h3>
                <ContentWrap>
                  <h4>2023.01.09 - 2023.02.28</h4>
                  <Content> 프론트엔드 웹 개발자 양성 과정 - HTML5, CSS3, 자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React)</Content>
                </ContentWrap>
                <ContentWrap>
                  <h4>2021.09.07 - 2022.01.25</h4>
                  <Content> (디지털디자인)UI/UX 반응형 웹디자인 & 웹퍼블리셔B 수료</Content>
                </ContentWrap>
                <ContentWrap>
                  <h4>2008.03.03 - 2014.08.14 </h4>
                  <Content>부산외국어대학교 한국어문학부 졸업 /부전공: 일본어문학</Content>
                </ContentWrap>
              </Txt>
              <Txt>
                <h3>SKILLS</h3>
                <ContentWrap>
                  <div> HTML5, CSS3, 자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React), 깃허브(Github)</div>
                </ContentWrap>
              </Txt>
            </TextWrap>
          </Bg>
        </BgWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProfile;

const Container = styled.div`
  z-index: 1;
  position: relative;

  width: 100%;
  background: ${({ theme }) => theme.colors.white_color};
  @media ${({ theme }) => theme.device.laptop} {
    height: 1400px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 1000px;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.mobile} {
    transition: all 0.3s;
    /* margin-bottom: 900px; */
  }
  @media only screen and (max-width: 600px) {
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 74%;
  margin: 0 auto;
  height: 1200px;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: column;
  }
`;

const TitleWrap = styled.div`
  z-index: 2;

  width: 75%;

  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    position: relative;

    width: 100%;
    max-width: 100%;
    margin-top: 100px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    max-width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const Title = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  color: ${({ theme }) => theme.colors.main_color};
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    margin-top: -150px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin-top: -150px;
  }
  h4 {
    font-family: "Montserrat";
    font-weight: 500;
    color: #000;
    font-size: 20px;
    @media ${({ theme }) => theme.device.laptop} {
      text-align: center;
      font-family: "Montserrat";
      font-weight: 500;

      font-size: 18px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      font-family: "Montserrat";
      font-weight: 500;

      font-size: 18px;
    }
  }
  h2 {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 600;

    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;
    @media ${({ theme }) => theme.device.laptop} {
      width: 100%;
      font-family: "Montserrat";
      font-weight: 600;

      font-size: 60px;
      margin-top: 15px;
      line-height: 110%;
      text-align: center;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      font-family: "Montserrat";
      font-weight: 600;

      margin-top: 10px;
      line-height: 100%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;
      font-family: "Montserrat";
      font-weight: 700;

      margin-top: 20px;
      line-height: 120%;
    }
  }
  h3 {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black_color};
    font-size: 18px;
    line-height: 160%;
    margin-top: 60px;
    @media ${({ theme }) => theme.device.laptop} {
      width: 100%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;
      font-family: "Montserrat";
      font-weight: 500;

      font-size: 18px;
      line-height: 160%;
      margin-top: 40px;
    }
  }
`;

const BgWrap = styled.div`
  z-index: 1;

  width: 100%;
  height: 100%;
  padding-top: 100px;

  /* background-color: black; */
  @media ${({ theme }) => theme.device.laptop} {
    z-index: 1;
    transition: all 0.3s;
    padding-top: 0;
  }
`;

const Bg = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;

  /* background: #0f3057; */
  color: ${({ theme }) => theme.colors.black_color};
`;
const TextWrap = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.black_color};
`;
const Txt = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black_color};

  h3 {
    text-align: left;
    font-weight: 600;
    font-size: 2rem;
    padding-top: 50px;

    color: ${({ theme }) => theme.colors.main_color};
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.main_color};
      margin: 30px auto;
    }
    @media ${({ theme }) => theme.device.laptop} {
      width: 100%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      font-size: 1.5rem;

      padding-top: 30px;
    }
  }
`;

const ContentWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black_color};
  h4 {
    width: 40%;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black_color};
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

const Content = styled.div`
  /* position: absolute;
  top: 10%;
  left: 30%; */
  width: 50%;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black_color};
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 0.8rem;
  }
`;

// const Slide = styled.div`
//   z-index: 3;
//   position: absolute;
//   top: 250px;
//   right: 13%;
//   width: 44.981608%;
//   height: 585px;
//   background: seagreen;
//   @media ${({ theme }) => theme.device.laptop} {
//     z-index: 3;
//     position: absolute;
//     top: 250px;
//     right: 10%;
//     width: 44.981608%;
//     height: 450px;
//     background: seagreen;
//     transition: all 0.3s;
//   }

//   @media ${({ theme }) => theme.device.mobile} {
//     z-index: 3;
//     position: absolute;
//     top: 500px;
//     left: 10%;
//     width: 80%;
//     height: 400px;
//     background: seagreen;
//   }
// `;

// const SlideWrap = styled.ul`
//   z-index: 2;
//   position: absolute;
//   bottom: 30px;
//   left: -150px;

//   @media ${({ theme }) => theme.device.mobile} {
//     z-index: 3;
//     position: relative;
//     left: 0;
//     top: 30px;
//     text-align: center;
//   }
// `;

// const SlideList = styled.li`
//   display: inline-block;
//   margin: 0 7px;
//   a {
//     z-index: 3;
//     position: relative;
//     font-weight: 700;
//     color: #000;
//     font-size: 90px;
//     transition: all 0.4s;
//     @media ${({ theme }) => theme.device.laptop} {
//       position: relative;
//       z-index: 2;
//       font-weight: 700;
//       color: #000;
//       font-size: 3rem;
//     }
//     @media ${({ theme }) => theme.device.tablet} {
//       position: relative;
//       z-index: 2;
//       font-weight: 700;
//       color: #000;
//       font-size: 3rem;
//     }
//     @media ${({ theme }) => theme.device.mobile} {
//       position: relative;
//       z-index: 2;
//       font-weight: 700;
//       color: #000;
//       font-size: 3rem;
//     }

//     &::before {
//       z-index: -1;
//       content: "";
//       position: absolute;
//       left: 0%;
//       top: 70%;
//       width: 100%;
//       height: 20px;
//       box-shadow: inset 0px 0px 0px #0066ff;
//       background: #5053582c;

//       transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
//     }

//     &:hover {
//       &::before {
//         box-shadow: inset 650px 0px 0px #0066ff;
//       }
//     }
//   }

//   h4 {
//     margin-top: 20px;
//     font-weight: 500;
//     color: #000;
//     font-size: 26px;
//   }
// `;

// const OneWrap = styled.div`
//   display: none;
//   z-index: 2;
//   width: 100%;
//   @media ${({ theme }) => theme.device.laptop} {
//     display: flex;
//     width: 50%;
//     margin: 50px auto;
//     justify-content: space-between;
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//     display: flex;
//     width: 50%;
//     margin: 50px auto;
//     justify-content: space-between;
//   }
// `;

// const OneList = styled.div`
//   position: relative;
//   margin-bottom: 15px;
// `;

// const One = styled.div`
//   display: inline-block;

//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: #3f72af;

//   margin-bottom: 1px;
// `;

// const BtnWrap = styled.ul`
//   z-index: 2;
//   position: absolute;
//   top: 20%;
//   left: 30%;
//   @media ${({ theme }) => theme.device.laptop} {
//     left: 20%;
//     transition: all 0.3s;
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//     z-index: 2;
//     position: absolute;
//     top: 150px;
//     left: 0;
//     text-align: center;
//     width: 100%;
//   }
// `;

// const BtnList = styled.li`
//   position: relative;
//   margin-bottom: 15px;
//   @media ${({ theme }) => theme.device.mobile} {
//     position: relative;
//     display: inline-block;
//     margin: 0 2px;
//   }
//   &:hover {
//     color: #000;
//     &::after {
//       content: "";
//       display: block;
//       width: 34px;
//       height: 1px;
//       background: #8e8f9a;

//       position: absolute;

//       top: 50%;
//       left: -15%;

//       transition: all 0.3s ease;
//     }
//   }
//   div {
//     display: inline-block;
//   }
//   a {
//     z-index: 3;
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 100%;
//     @media ${({ theme }) => theme.device.laptop} {
//       font-size: 80px;
//     }
//   }
//   div {
//     width: 34px;
//     height: 1px;
//     background: transparent;
//     margin-bottom: 6px;
//     transition: all 0.3s;
//     @media ${({ theme }) => theme.device.mobile} {
//       display: none;
//     }
//   }
// `;

// const BtnTxt = styled.div`
//   font-weight: 500;
//   color: #8e8f9a;
//   font-size: 18px;
//   &:hover {
//     color: #000;
//   }
// `;
