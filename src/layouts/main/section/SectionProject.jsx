import styled from "styled-components";

function SectionProject() {
  const list = [
    {
      name: "MOVIELIST",
      image: "/img/main_bg01.jpg",
      url: "https://kimahr.github.io/movie-list/",
      material: "Recycled",
    },
    {
      name: "TODOLIST",
      image: "/img/main_bg02.jpg",
      url: "https://kimahr.github.io/todolist/",
      material: "Recycled",
    },
    {
      name: "PORTFOLIO",
      image: "/img/main_bg03.jpg",
      url: "https://github.com/KimAhR/aarreumkim/",
      material: "Recycled",
    },
    {
      name: "DIARY",
      image: "/img/main_bg04.jpg",
      url: "https://kimahr.github.io/movielist/",
      material: "Leather",
    },
  ];
  return (
    <Container id="project">
      <TitleWrap>
        <Title>
          <h4>03</h4>
          <h2>learn react project</h2>
        </Title>
      </TitleWrap>
      <Wrap>
        <ContentWrap>
          {list.map((content) => (
            <li>
              <ImgArea>
                <a href={content.url}>
                  <img src={content.image} />
                </a>
              </ImgArea>
              <HoverWrap>
                <p>{content.name}</p>
              </HoverWrap>
            </li>
          ))}
        </ContentWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 1200px;

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

const ContentWrap = styled.ul`
  width: 100%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    width: 48%;
    height: 450px;
    margin: 10px auto;
    border: 1px solid #000;
    position: relative;

    a {
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      img {
        width: 100%;
        height: 100%;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

const ImgArea = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const HoverWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  p {
    color: #fff;
  }
`;
