import styled from "styled-components";

function SectionMain() {
  return (
    <Container>
      <Wrap>
        <h2>PORTFOLIO</h2>
        <div>
          <p>KIM AH REUM</p>
          <span>FRONT-END DEVELOPER</span>
        </div>
      </Wrap>
    </Container>
  );
}

export default SectionMain;

const Container = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: ${({ theme }) => theme.colors.white_color};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
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
  max-width: 74%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.device.laptop} {
  }
  h2 {
    font-size: ${({ theme }) => theme.fonts.fontLarge};
    background-color: ${({ theme }) => theme.colors.main_color};

    font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
    @media ${({ theme }) => theme.device.laptop} {
      /* position: absolute; */
      font-size: 1.75rem;

      font-weight: 600;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: ${({ theme }) => theme.fonts.fontSmall};
      background-color: ${({ theme }) => theme.colors.main_color};

      font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
    }
  }
  div {
    font-size: 6rem;
    @media ${({ theme }) => theme.device.laptop} {
      font-weight: 600;
      color: #fff;
      font-size: 5rem;
      transition: all 0.3s;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 3rem;
      background-color: ${({ theme }) => theme.colors.main_color};
      color: #fff;
      font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
    }
  }
`;
