import styled from "styled-components";

function SectionProfile() {
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

export default SectionProfile;

const Container = styled.div`
  width: 100%;
  height: 950px;
  margin-top: -100px;
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
