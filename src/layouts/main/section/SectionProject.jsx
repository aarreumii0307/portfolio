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
          <h2>learn react project</h2>
        </Title>
      </TitleWrap>
      <Wrap>
        <ContentList>
          <li>
            MOVIEList<a href="https://kimahr.github.io/movie-list/"></a>
          </li>
          <li>
            TODOLIST<a href="https://kimahr.github.io/todolist/"></a>
          </li>
          <li>
            PORTFOLIO<a href="https://github.com/KimAhR/aarreumkim/"></a>
          </li>
          <li>
            PORTFOLIO<a href="https://github.com/KimAhR/aarreumkim/"></a>
          </li>
        </ContentList>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 1700px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 800px;
    margin-top: 900px;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 75%;
  height: 100%;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
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

const ContentList = styled.ul`
  width: 50%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    width: 50%;
    height: 450px;
    margin-right: 10px;
    background-color: blue;

    &:hover {
      opacity: 1;
    }
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
