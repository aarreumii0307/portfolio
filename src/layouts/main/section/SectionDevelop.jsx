import styled from "styled-components";
import { useState } from "react";

function SectionDevelop() {
  const [hover, setHover] = useState(false);

  return (
    <Container id="develop">
      {hover && <BgImg src={process.env.PUBLIC_URL + hover} alt="cuckoo"></BgImg>}
      <Wrap>
        <Content>
          <Title>
            <h4>02</h4>
            <h2>Front-End Web Develop</h2>
            <h3>Endeavors for more reasonable, logical design. I have learned to create clearer, more logical and reasonable design and to increase efficiency of collaboration.</h3>
            <View>
              <a href="main">VIEW</a>
            </View>
          </Title>
          <ContentList>
            <li onMouseOver={() => setHover("/img/main_bg01.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>Cuckoo</h2>
                <HoverWrap>
                  <h4>VIEW</h4>
                </HoverWrap>
                <a href="https://kimahr.github.io/clonecoding/class/cuckoo"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg02.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>DKG Holdings</h2>
                <HoverWrap>
                  <h4>VIEW</h4>
                </HoverWrap>
                <a href="https://kimahr.github.io/clonecoding/class/DKG"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg03.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <h2>Zinus</h2>
                <HoverWrap>
                  <h4>VIEW</h4>
                </HoverWrap>
                <a href="https://kimahr.github.io/clonecoding/class/zinus"></a>
              </ListTitle>
            </li>
            <li onMouseOver={() => setHover("/img/main_bg04.jpg")} onMouseOut={() => setHover(null)}>
              <ListTitle>
                <h3>RENEWAL WEBSITE</h3>
                <h2>Fresh</h2>
                <HoverWrap>
                  <h4>VIEW</h4>
                </HoverWrap>
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
  position: relative;
  width: 100%;
  height: 1000px;
  /* margin: 0 auto; */
  background: ${({ theme }) => theme.colors.green_color};

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 1000px;
    margin-top: 500px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 770px;
    margin-top: 650px;
  }
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
  opacity: 0.2;

  overflow: hidden;
  z-index: 1;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    top: -50px;
  }
  @media only screen and (max-width: 600px) {
  }
`;

const Title = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 50px;
  width: 43%;
  padding-top: 100px;
  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: 50px;
    width: 43%;
    padding-top: 200px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: 50px;
    width: 43%;
    padding-top: 100px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 2;
    position: absolute;
    top: -450px;
    right: 10%;
    width: 100%;
    max-width: 80%;
    padding-top: 100px;
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
  }

  h4 {
    font-weight: 400;
    color: #fff;
    font-size: 20px;
    @media ${({ theme }) => theme.device.laptop} {
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 18px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 18px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-family: "Montserrat";
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black_color};
      font-size: 18px;
    }
  }

  h2 {
    width: 60%;
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;
    @media ${({ theme }) => theme.device.laptop} {
      width: 70%;
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 70%;
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      display: inline-block;
      width: 100%;
      font-family: "Montserrat";
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black_color};
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media only screen and (max-width: 600px) {
    }
  }
  h3 {
    width: 50%;
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: ${({ theme }) => theme.fonts.fontSemiMedium};
    line-height: 160%;
    margin-top: 40px;
    @media ${({ theme }) => theme.device.laptop} {
      width: 70%;

      font-weight: 500;
      color: #fff;
      font-size: 18px;
      line-height: 160%;
      margin-top: 40px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 70%;
      font-weight: 500;
      color: #fff;
      font-size: 18px;
      line-height: 160%;
      margin-top: 40px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      display: inline-block;
      width: 100%;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black_color};
      font-size: 18px;
      line-height: 160%;
      margin-top: 40px;
    }
    @media only screen and (max-width: 600px) {
    }
  }
`;

const View = styled.div`
  z-index: 3;
  position: absolute;
  bottom: -50px;
  left: 0;
  display: inline-block;
  width: auto;
  height: 25px;
  /* background: red; */
  margin-top: 40px;
  @media ${({ theme }) => theme.device.mobile} {
    /* z-index: 3;
    position: relative;
    display: inline-block;
    height: 25px;
    /* background: red; */

    display: none;
  }

  a {
    z-index: 2;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-weight: 500;
    color: #fff;
    font-size: 15px;
    transition: all 0.3s;
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      z-index: 2;
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-weight: 500;
      color: #000;
      font-size: 15px;
      transition: all 0.3s;
    }
  }
`;

const ContentList = styled.ul`
  width: 100%;
  max-width: 74%;
  margin: 0 auto;
  height: 100%;
  padding-top: 150px;

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    max-width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 120px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 50px;
  }

  li {
    border-top: 1px solid #fff;
    width: 50%;
    height: 190px;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    &:last-child {
      width: 100%;
    }
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      border-top: 1px solid #fff;
      width: 100%;
      height: 150px;
      opacity: 0.5;
    }
  }
`;

const ListTitle = styled.div`
  position: relative;
  padding-top: 55px;
  padding-left: 25px;

  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    padding-top: 40px;
    padding-left: 0;
    text-align: center;
  }

  /* color: #fff; */

  h3 {
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: ${({ theme }) => theme.fonts.fontSmall};
    @media ${({ theme }) => theme.device.mobile} {
      font-weight: 500;
      color: #fff;
      font-size: 16px;
    }
  }
  h2 {
    padding-top: 20px;
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: ${({ theme }) => theme.fonts.fontMediumLarge};
    @media ${({ theme }) => theme.device.laptop} {
      padding-top: 20px;

      font-weight: 500;
      color: #fff;
      font-size: 32px;
      display: inline-block;
    }
    @media ${({ theme }) => theme.device.tablet} {
      padding-top: 20px;
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 32px;
      display: inline-block;
    }
    @media ${({ theme }) => theme.device.mobile} {
      padding-top: 20px;
      font-family: "Montserrat";
      font-weight: 500;
      color: #fff;
      font-size: 27px;
      display: inline-block;
    }
  }
`;

const HoverWrap = styled.div`
  margin-top: -50px;
  padding-right: 25px;
  display: flex;
  justify-content: flex-end;

  h4 {
    font-weight: 500;
    color: #fff;
    font-size: 14px;
    transition: all 0.3s;

    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
  }
`;
