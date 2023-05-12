import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

function SectionAbout() {
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
    <Container id="skills">
      <Wrap>
        <TextLine01>
          <h1>KIMAHREUM</h1>
          <p>1989.03.07</p>
          <p>SEOUL MAPOGU</p>
        </TextLine01>
        <TextLine02>
          <h1>PHONENUMBER</h1>
          <p>010.2967.5037</p>
        </TextLine02>
        <TextLine03>
          <h1>E-MAIL</h1>
          <p>AARREUM0307@GMAIL.COM</p>
        </TextLine03>
        <TextLine04>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>REACT</p>
          <p>GITHUB</p>
        </TextLine04>
        {/* <TextLine05>
          <p>BUSAN UNIVERSITY OF FOREIGN STUDIES</p>
        </TextLine05> */}
      </Wrap>
    </Container>
  );
}

export default SectionAbout;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextLine01 = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 600;
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const TextLine02 = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const TextLine03 = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;
const TextLine04 = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;
// const TextLine05 = styled.div`
//   width: 60%;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;

//   p {
//     font-size: 2rem;
//     font-weight: 600;
//     letter-spacing: 0.02rem;
//   }
// `;
