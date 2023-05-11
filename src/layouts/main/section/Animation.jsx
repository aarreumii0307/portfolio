import styled, { keyframes } from "styled-components";

const Animaition = () => {
  return (
    <Container>
      <FlowBox>
        <FlowWrap>
          <Flow>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
            <span>KEEP GOING</span>
          </Flow>
        </FlowWrap>
      </FlowBox>
    </Container>
  );
};
export default Animaition;

const Container = styled.div`
  position: relative;

  background: ${({ theme }) => theme.colors.white_color};
  @media screen and(max-width:  1400px) {
    width: 100%;
    height: 60vw;
    top: 0;
    left: 0;
  }
`;
const flowing = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}
100% {
  transform: translate3d(-50%, 0, 0);
}
`;

const FlowBox = styled.div`
  width: 100%;

  overflow: hidden;
`;

const FlowWrap = styled.div`
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`;

const Flow = styled.div`
  font-size: 120px;
  animation: ${flowing} 15s linear infinite;
  span {
    color: #307672;
    /* text-shadow: -3px 0 #053742, 0 3px #053742, 3px 0 #053742, 0 -3px #053742; */
    display: inline-block;
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    padding-right: 30px;
  }
`;
