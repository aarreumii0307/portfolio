import styled from "styled-components";
import { useState } from "react";

function SectionDevelop() {
  const [hover, setHover] = useState(false);

  return (
    <Container id="develop">
      <Wrap>
        {hover && <BgImg src={process.env.PUBLIC_URL + hover} alt="cuckoo"></BgImg>}
        <Content>
          <Title>
            <h3>02</h3>
            <h2>WEB DEVELOP</h2>
          </Title>
          <ContentList>
            <li onMouseOver={() => setHover("/img/main_bg01.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>Cuckoo</h2>

                <a href="https://kimahr.github.io/clonecoding/class/cuckoo"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg02.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>DKG Holdings</h2>

                <a href="https://kimahr.github.io/clonecoding/class/DKG"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg03.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>Zinus</h2>

                <a href="https://kimahr.github.io/clonecoding/class/zinus"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg04.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RENEWAL WEBSITE</h3>
                <h2>Fresh</h2>

                <a href="https://kimahr.github.io/clonecoding/fresh"></a>
              </ListTitle>
            </li>
          </ContentList>
        </Content>
      </Wrap>
    </Container>
  );
}

export default SectionDevelop;

const Container = styled.div`
  width: 100%;
  height: 950px;
  margin-top: 100px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 800px;
    margin-top: 900px;
  }
`;

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;

  overflow: hidden;
  z-index: 1;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 75%;
  height: 100%;
  margin: 0 auto;
  background: #000;
`;

const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.device.mobile} {
  }
  @media only screen and (max-width: 600px) {
  }
`;

const Title = styled.div`
  z-index: 2;
  position: absolute;
  top: -150px;
  right: 10%;
  width: 100%;
  max-width: 80%;
  text-align: center;

  h4 {
    font-family: "Montserrat";
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black_color};
    font-size: 18px;
  }
  h2 {
    display: inline-block;
    width: 100%;
    font-family: "Montserrat";
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black_color};
    font-size: 50px;

    line-height: 120%;
  }
  h3 {
    display: inline-block;
    width: 100%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black_color};
    font-size: 18px;
    line-height: 160%;
  }
`;

const ContentList = styled.ul`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  height: 100%;
  padding-top: 100px;

  li {
    border-top: 1px solid #fff;
    width: 100%;
    height: 200px;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 1;
    }

    &:last-child {
      width: 100%;
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

const ListTitle = styled.div`
  position: relative;

  text-align: center;

  /* color: #fff; */

  h3 {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
  }
  h2 {
    padding-top: 20px;
    font-family: "Montserrat";
    font-weight: 500;
    color: #fff;
    font-size: 27px;
    display: inline-block;
  }
`;
