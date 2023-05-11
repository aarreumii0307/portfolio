import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <Container open={open}>
      <Wrap>
        <Ul>
          <li>
            <Num>01</Num>
            <TxtWrap>
              <a href="#profile">ABOUT</a>
              <span></span>
            </TxtWrap>
          </li>
          <li>
            <Num>02</Num>
            <TxtWrap>
              <a href="#develop">DEVELOP</a>
              <span></span>
            </TxtWrap>
          </li>
          <li>
            <Num>03</Num>
            <TxtWrap>
              <a href="#project">REACT</a>
              <span></span>
            </TxtWrap>
          </li>
        </Ul>
      </Wrap>
    </Container>
  );
};
const Container = styled.div`
  z-index: 50;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  overflow: hidden;
  @media ${({ theme }) => theme.device.laptop} {
    z-index: 50;
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
const Ul = styled.ul`
  position: absolute;
  top: 20%;
  left: 33%;
  @media only screen and (max-width: 600px) {
    left: 25%;
  }

  li {
    display: flex;
    width: 50%;
    margin: 0 auto;
  }
`;

const Num = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black_color};
`;

const TxtWrap = styled.div`
  display: inline-block;
  margin-left: 20px;

  a {
    z-index: 2;
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.black_color};
  }
  span {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    background: #0066ff;
    height: 17px;
    transition: all 0.3s;
    transform: scale(0, 1);
  }
`;
export default RightNav;
