import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
function SectionProject() {
  const data = [
    {
      id: 0,
      title: "MOVIELIST",
      btn: "01.MOVIELIST",
      content: "https://kimahr.github.io/movie-list/",
      image: "/img/movie.jpg",

      dots: "01",
    },
    {
      id: 1,
      title: "TODOLIST",
      btn: "02.TODOLIST",
      content: "https://kimahr.github.io/todolist/",
      image: "/img/todolist.jpg",
      dots: "02",
    },
    {
      id: 2,
      title: "PORTFOLIO",
      btn: "03.PORTFOLIO",
      content: "https://github.com/KimAhR/aarreumkim/",
      image: "/img/main_bg03.jpg",
      dots: "03",
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
  const [hover, setHover] = useState(false);
  return (
    <Container id="project">
      <TitleWrap>
        <Title>
          <h4>03</h4>
          <h2>learn react</h2>
        </Title>
        <TitleBox>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt, unde vel, ipsum nulla quos alias quidem velit vero est sed. Voluptate nihil distinctio maiores architecto
            corrupti, quam suscipit laudantium!
          </h3>
        </TitleBox>
      </TitleWrap>
      <Wrap>
        <BtnWrap>
          {data.map((item) => (
            <BtnList key={item.id} className={index === item.id ? SlideWrap.active : null} onClick={() => setIndex(item.id)} style={{ transform: `translate3d(${index}%)` }}>
              <BtnTxt>{item.btn}</BtnTxt>
              {data.map((index) => (
                <div key={index}></div>
              ))}
            </BtnList>
          ))}
        </BtnWrap>

        <Slide>
          {data
            .filter((item) => index === item.id)
            .map((item) => (
              <SlideWrap key={item.id} className={index === item.id ? SlideWrap.active : null} onMouseOver={() => setHover(item.image)} onMouseOut={() => setHover(null)}>
                <li>
                  {hover && <BgImg src={process.env.PUBLIC_URL + hover} alt="cuckoo"></BgImg>}
                  {data
                    .filter((item) => index === item.id)
                    .map((item) => (
                      <SlideTxt>
                        <a href={item.content}>{item.title}</a>
                      </SlideTxt>
                    ))}
                </li>
              </SlideWrap>
            ))}
          <OneWrap>
            {data.map((item) => (
              <OneList key={item.id} className={index === item.id ? SlideWrap.active : null} onClick={() => setIndex(item.id)} style={{ transform: `translate3d(${index}%)`, transition: "all 3s" }}>
                <One key={item.id} className={index === item.id ? SlideWrap.active : null} style={index === item.id ? { color: "#307672", fontWeight: "bold" } : { color: "#000" }}>
                  {item.dots}
                </One>
                {data.map((index) => (
                  <div key={index}></div>
                ))}
              </OneList>
            ))}
          </OneWrap>
        </Slide>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  z-index: 1;
  position: relative;
  top: 0;
  width: 100%;
  height: 1000px;
  background: ${({ theme }) => theme.colors.white_color};
  @media ${({ theme }) => theme.device.laptop} {
    height: 800px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 850px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 950px;
  }
`;

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;

  overflow: hidden;
  z-index: 1;
`;

const TitleWrap = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 74%;
  margin: 0 auto;
  padding-top: 100px;

  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    margin: 100px auto;
    width: 100%;
    max-width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
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
  margin-top: -50px;
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: -150px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  h4 {
    font-family: "Montserrat";
    font-weight: 500;
    color: ${({ theme }) => theme.colors.main_color};
    font-size: 20px;
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      font-family: "Montserrat";
      font-weight: 500;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 18px;
    }
  }
  h2 {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main_color};
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;

    @media ${({ theme }) => theme.device.tablet} {
      width: 70%;
      font-family: "Montserrat";
      font-weight: 600;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;
      font-family: "Montserrat";
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
  }
`;

const TitleBox = styled.div`
  width: 100%;
  margin-top: -50px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    margin-top: -150px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin-top: -50px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: 30px;
  }
  h3 {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 500;
    color: #000;
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
      color: #000;
      font-size: 18px;
      line-height: 160%;
      margin-top: 40px;
    }
  }
`;

const Wrap = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 585px;
  max-width: 74%;
  margin: 150px auto;
  @media ${({ theme }) => theme.device.laptop} {
    margin: 50px auto;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 100px auto;
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const SlideWrap = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.main_color};
  li {
    z-index: 1;

    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.main_color};

    transition: all 0.3s;
  }
  /* top: 150px; */
  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    height: 80%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 2;
    position: relative;

    left: 0;
    text-align: center;
    width: 100%;
  }
`;

const SlideTxt = styled.div`
  width: 100%;
  position: relative;
  top: 40%;
  left: 23%;

  @media ${({ theme }) => theme.device.laptop} {
    top: 40%;
    left: 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.mobile} {
  }

  a {
    z-index: 2;
    position: relative;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white_color};
    font-size: 5rem;

    @media ${({ theme }) => theme.device.laptop} {
      z-index: 2;

      font-weight: 700;

      font-size: 4.25rem;
    }
    @media ${({ theme }) => theme.device.tablet} {
      z-index: 2;

      font-weight: 700;

      font-size: 3rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      z-index: 2;

      font-weight: 700;

      font-size: 2rem;
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

    font-size: 26px;
  }
`;

const OneWrap = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 8%;
    left: 40%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 35%;
  }
`;

const OneList = styled.div`
  display: inline-block;
  margin: 0 8px;
`;

const One = styled.div`
  display: inline-block;

  /* width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3f72af; */

  margin-bottom: 1px;
`;

const BtnWrap = styled.ul`
  z-index: 2;

  width: 50%;
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    left: -30%;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  /* @media ${({ theme }) => theme.device.mobile} {
    z-index: 3;
    position: relative;
    left: 0;
    top: 30px;
    text-align: center;
  } */
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
    color: #144d53;
    font-weight: bold;
    /* &::after {
      content: "";
      display: block;
      width: 34px;
      height: 1px;
      background: #8e8f9a;

      position: absolute;

      top: 50%;
      left: -15%;

      transition: all 0.3s ease;
    } */
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
`;

const BtnTxt = styled.div`
  font-weight: 500;
  color: #8e8f9a;
  font-size: 18px;
  &:hover {
    color: #000;
  }
`;
