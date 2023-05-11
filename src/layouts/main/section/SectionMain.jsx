import styled from "styled-components";

function SectionMain() {
  return (
    <Container>
      <Wrap></Wrap>
    </Container>
  );
}

export default SectionMain;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;

  margin: 0 auto;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    height: 800px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 600px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 75%;
  margin: 0 auto;
  background: url("img/bg.jpg") center center no-repeat;
`;
