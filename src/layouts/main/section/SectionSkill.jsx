import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SectionSkill = () => {
  const data = [
    {
      id: 0,
      title: "sociable",
      content: "sociable",
      contents: "사교적인",
      dots: "",
    },
    {
      id: 1,
      title: "enterprising",
      content: "enterprising",
      contents: "진취력있는",
      dots: "",
    },
    {
      id: 2,
      title: "shrewd",
      content: "shrewd",
      contents: "catch on fast",
      dots: "",
    },
    {
      id: 3,
      title: "sociable",
      content: "sociable",
      contents: "사교적인",
      dots: "",
    },
    {
      id: 4,
      title: "considerate",
      content: "considerate",
      contents: "배려하는",
      dots: "",
    },
    {
      id: 5,
      title: "hardworking",
      content: "hardworking",
      contents: "성실한",
      dots: "",
    },
    {
      id: 6,
      title: "figma",
      content: "figma",
      contents: "김아름",
      dots: "",
    },
    {
      id: 7,
      title: "responsibility",
      content: "responsibility",
      contents: "책임감",
      dots: "",
    },
  ];

  const delay = 2500;
  const [index, setIndex] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  });
  return (
    <Container id="about">
      <TitleWrap>
        <Title>
          <h4>04</h4>
          <h2>word express me</h2>
        </Title>
      </TitleWrap>
      <Wrap>
        <Slide>
          <SlideWrap>
            {data
              .filter((item) => index === item.id)
              .map((item) => (
                <SlideList>
                  <SlideTxt>
                    <a href="#main">{item.content}</a>
                    <span></span>
                    <h4>{item.contents}</h4>
                  </SlideTxt>
                  <OneWrap>
                    {data.map((item) => (
                      <OneList
                        key={item.id}
                        className={index === item.id ? SlideWrap.active : null}
                        onClick={() => setIndex(item.id)}
                        style={{ transform: `translate3d(${index}%)`, transition: "all 3s" }}
                      >
                        <One key={item.id} className={index === item.id ? SlideWrap.active : null} style={index === item.id ? { background: "#000" } : { background: "#8e8f9a" }}>
                          {item.dots}
                        </One>
                        {data.map((index) => (
                          <div key={index}></div>
                        ))}
                      </OneList>
                    ))}
                  </OneWrap>
                </SlideList>
              ))}
          </SlideWrap>
        </Slide>
        <BtnWrap>
          {data.map((item) => (
            <BtnList key={item.id} className={index === item.id ? SlideWrap.active : null} onClick={() => setIndex(item.id)} style={{ transform: `translate3d(${index}%)` }}>
              <BtnTxt>{item.title}</BtnTxt>
              {data.map((index) => (
                <div key={index}></div>
              ))}
            </BtnList>
          ))}
        </BtnWrap>
      </Wrap>
    </Container>
  );
};
export default SectionSkill;

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white_color};
`;
const TitleWrap = styled.div`
  z-index: 2;

  width: 100%;
  max-width: 74%;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    position: relative;

    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 150px;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
  }
  h4 {
    font-family: "Montserrat";
    font-weight: 500;
    color: #000;
    font-size: 20px;
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      font-family: "Montserrat";
      font-weight: 500;
      color: #000;
      font-size: 18px;
    }
  }
  h2 {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 600;
    color: #000;
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;

    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      font-family: "Montserrat";
      font-weight: 600;
      color: #000;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;
      font-family: "Montserrat";
      font-weight: 700;
      color: #000;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
  }
`;

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 870px;
  display: flex;
  justify-content: space-around;
  /* background: #fff; */

  @media ${({ theme }) => theme.device.mobile} {
    height: 400px;
  }
`;

const Slide = styled.div`
  z-index: 1;
  width: 50%;
  /* height: 969px; */
`;

const SlideWrap = styled.ul`
  position: relative;
  width: 80%;
  margin: 30% auto;
  /* top: 150px; */
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 2;
    position: absolute;
    top: 150px;
    left: 0;
    text-align: center;
    width: 100%;
  }
`;

const SlideList = styled.li`
  position: absolute;
  top: 0;
  left: 30%;
  width: 50%;
  height: 300px;
  /* background: #fff; */
  @media ${({ theme }) => theme.device.laptop} {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 40%;
    width: 60%;
    height: 300px;

    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    /* background: rosybrown; */
    text-align: center;
  }
`;

const SlideTxt = styled.div`
  position: relative;
  top: -50%;
  display: inline-block;

  a {
    z-index: 2;
    position: relative;
    font-weight: 700;
    color: #000;
    font-size: 150px;
    transition: all 0.4s;
    @media ${({ theme }) => theme.device.laptop} {
      display: inline-block;
      z-index: 2;

      font-weight: 700;
      color: #000;
      font-size: 80px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      display: inline-block;
      z-index: 2;

      font-weight: 700;
      color: #000;
      font-size: 70px;
    }

    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      left: 0%;
      top: 70%;
      width: 100%;
      height: 20px;
      box-shadow: inset 0px 0px 0px #0066ff;
      background: #5053582c;

      transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    }
    &:hover {
      &::before {
        box-shadow: inset 1000px 0px 0px #0066ff;
      }
    }
  }

  span {
    z-index: 1;
    /* bottom: 0;
    left: 100%;
    width: 100%;
    height: 20px; */

    transition: all 0.7s;
    position: absolute;

    /* z-index: 1;
    display: inline-block;
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 20px;
    background: #5053582c;
    transition: all 0.7s;
    overflow: hidden; */

    &:hover {
      &::before {
        box-shadow: inset 600px 0px 0px #0066ff;
      }
    }
  }

  h4 {
    margin-top: 20px;
    font-weight: 500;
    color: #000;
    font-size: 26px;
  }
`;

const OneWrap = styled.div`
  display: none;
  z-index: 2;
  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    width: 50%;
    margin: 50px auto;
    justify-content: space-between;
  }
`;

const OneList = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const One = styled.div`
  display: inline-block;

  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3f72af;

  margin-bottom: 1px;
`;

const BtnWrap = styled.ul`
  z-index: 2;
  position: absolute;
  top: 35%;
  left: 15%;
  @media ${({ theme }) => theme.device.laptop} {
    left: 20%;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 2;
    position: absolute;
    top: 150px;
    left: 0;
    text-align: center;
    width: 100%;
  }
`;

const BtnList = styled.li`
  position: relative;
  margin-bottom: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    display: inline-block;
    margin: 0 2px;
  }
  &:hover {
    color: #000;
    &::after {
      content: "";
      display: block;
      width: 34px;
      height: 1px;
      background: #8e8f9a;

      position: absolute;

      top: 50%;
      left: -15%;

      transition: all 0.3s ease;
    }
  }
  div {
    display: inline-block;
  }
  a {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 80px;
    }
  }
  div {
    width: 34px;
    height: 1px;
    background: transparent;
    margin-bottom: 6px;
    transition: all 0.3s;
    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
  }
`;

const BtnTxt = styled.div`
  font-weight: 500;
  color: #8e8f9a;
  font-size: 18px;
  &:hover {
    color: #000;
  }
`;

// const BgWrap = styled.div`
//   position: absolute;
//   top: 250px;
//   right: 0;
//   width: 50%;
//   height: 100%;
//   color: ${({ theme }) => theme.colors.black_color};
//   @media ${({ theme }) => theme.device.laptop} {
//     position: absolute;
//     top: 250px;
//     right: 0;
//     width: 60%;
//     height: 100%;
//     transition: all 0.3s;
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//     position: absolute;
//     top: 400px;
//     right: 0;
//     width: 100%;
//     height: 900px;
//     transition: all 0.3s;
//   }
// `;

// const Bg = styled.div`
//   z-index: 1;
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 83%;
//   /* background: ${({ theme }) => theme.colors.black_color}; */
//   @media ${({ theme }) => theme.device.laptop} {
//     height: 85%;
//   }
//   @media ${({ theme }) => theme.device.tablet} {
//     height: 90%;
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//     height: 100%;
//   }
// `;

// const TextWrap = styled.div`
//   width: 100%;
// `;

// const Txt = styled.div`
//   z-index: 2;
//   position: relative;
//   top: 0;
//   left: 10%;
//   width: 80%;
//   color: ${({ theme }) => theme.colors.white_color};
//   h3 {
//     text-align: left;
//     font-weight: 500;

//     font-size: 2rem;
//     padding-top: 50px;
//     &::after {
//       content: "";
//       display: block;
//       width: 100%;
//       height: 2px;
//       background: ${({ theme }) => theme.colors.white_color};
//       margin: 10px auto;
//     }
//   }
// `;

// const ContentWrap = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: flex-start;

//   line-height: 160%;

//   h4 {
//     width: 40%;
//     font-size: 1rem;
//     color: ${({ theme }) => theme.colors.white_color};
//   }
// `;

// const Content = styled.div`
//   /* position: absolute;
//   top: 10%;
//   left: 30%; */
//   width: 50%;
//   font-size: 1rem;
//   color: ${({ theme }) => theme.colors.white_color};
// `;
