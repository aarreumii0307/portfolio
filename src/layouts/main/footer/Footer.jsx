import styled from "styled-components";
import { useRef, useEffect } from "react";

function Footer() {
  // const img01Ref = useRef(null);
  // const img02Ref = useRef(null);
  const img03Ref = useRef(null);
  const img04Ref = useRef(null);

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;

  const handleMouseMove = (e) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  };

  const loop = () => {
    // const img01 = img01Ref.current;
    // const img02 = img02Ref.current;
    const img03 = img03Ref.current;
    const img04 = img04Ref.current;

    const speed = 0.05;

    mx += (x - mx) * speed;
    my += (y - my) * speed;
    // img01.style.transform = `translate(${mx / 9}px, ${my / 5}px)`;
    // img02.style.transform = `translate(${mx / -9}px, ${my / 8}px)`;
    img03.style.transform = `translate(${mx / 10}px, ${my / 9}px)`;
    img04.style.transform = `translate(${mx / -9}px, ${my / 10}px)`;

    window.requestAnimationFrame(loop);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Container>
      <Wrap>
        <ImgList>
          {/* <Img01>
            <img className="cilcle_01" alt="circle_bg" src="/img/Ellipse5.png" ref={img01Ref} />
          </Img01> */}

          {/* <Img02>
            <img className="cilcle_02" alt="circle_bg" src="/img/Ellipse6.png" ref={img02Ref} />
          </Img02> */}
          <Img03>
            <img src={`${process.env.PUBLIC_URL}/img/Ellipse9.png`} className="cilcle_03" alt="circle_bg" ref={img03Ref} />
          </Img03>
          <Img04>
            <img src={`${process.env.PUBLIC_URL}/img/Ellipse8.png`} className="cilcle_04" alt="circle_bg" ref={img04Ref} />
          </Img04>
        </ImgList>
        <TextBox>
          <p>THANK YOU FOR WATCHING</p>
        </TextBox>
        <ContactWrap>
          <Contact>
            <h3>phone</h3>
            <p>010.2967.5037</p>
          </Contact>
          <Contact>
            <h3>e-mail</h3>
            <p>aarreum0307@gmail.com</p>
          </Contact>
        </ContactWrap>
      </Wrap>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 40vw;
  margin: 0 auto;
  position: relative;
  background-color: #307672;
  @media ${({ theme }) => theme.device.laptop} {
    height: 690px;
    position: relative;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${({ theme }) => theme.device.laptop} {
    position: relative;
    margin: 0 auto;
  }
`;

const TextBox = styled.div`
  position: absolute;
  z-index: 3;
  p {
    width: 60%;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fonts.fontExtra};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white_color};
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 4.25rem;
      font-weight: 600;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 4rem;
      font-weight: 600;
    }
  }
`;

const ImgList = styled.div`
  top: 50%;
  left: -50%;
  z-index: 1;
`;

// const Img01 = styled.span`
//   position: absolute;
//   left: 35%;
//   bottom: 20%;
//   @media ${({ theme }) => theme.device.laptop} {
//     left: 15%;
//     bottom: 20%;
//   }
// `;

// const Img02 = styled.span`
//   position: absolute;
//   top: 15%;
//   right: 5%;
//   @media ${({ theme }) => theme.device.laptop} {
//     display: none;
//   }
// `;
const Img03 = styled.span`
  position: absolute;
  top: 30%;
  right: 5%;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
const Img04 = styled.span`
  position: absolute;
  bottom: 20%;
  left: 5%;
`;

const ContactWrap = styled.div`
  position: absolute;
  width: 100%;
  max-width: 74%;
  margin: 0 auto;
  bottom: 10%;
  left: 40%;
  @media ${({ theme }) => theme.device.mobile} {
    bottom: 5%;
    left: 25%;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;

  h3 {
    text-align: left;
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black_color};
    width: 5%;
    @media ${({ theme }) => theme.device.laptop} {
      width: 10%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 20%;
    }
  }
  p {
    text-align: left;
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white_color};
  }
`;
