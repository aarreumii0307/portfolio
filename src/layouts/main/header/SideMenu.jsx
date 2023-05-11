import styled from "styled-components";

function SideMenu({ open, setOpen }) {
  return (
    <Mbtn>
      <Wrap>
        <ul>
          <li>
            <Num>01</Num>
            <div class="txtWrap">
              <a href="./index.php" class="mainBtn_m">
                ABOUT
              </a>
              <span></span>
            </div>
          </li>
          <li class="addNav_m nav_m1">
            <Num>01</Num>
            <div class="txtWrap">
              <a href="./sub/design_uiux.php" class="mainBtn_m">
                SKILLS
              </a>
              <span></span>
            </div>
          </li>
          <li>
            <Num>01</Num>
            <div class="txtWrap">
              <a href="./sub/develop.php" class="mainBtn_m">
                DEVELOP
              </a>
              <span></span>
            </div>
          </li>
          <li>
            <Num>01</Num>
            <div class="txtWrap">
              <a href="./sub/about.php" class="mainBtn_m">
                PROJECT
              </a>
              <span></span>
            </div>
          </li>
        </ul>
      </Wrap>
    </Mbtn>
  );
}

const Mbtn = styled.div`
  /* z-index: 5;
  display: block;
  position: fixed;
  top: 0;
  left: 50%;
  background: #0c1017;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  overflow: hidden; */
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

// const LineWrap = styled.div`
//   z-index: 2;
//   position: relative;
//   float: left;
//   top: 60px;
//   transition: all 0.3s;
//   a {
//     display: inline-block;
//     span {
//       &:first-child {
//         overflow: hidden;
//         position: relative;
//         display: inline-block;
//         width: 21px;
//         height: 14px;
//       }
//       &:last-child {
//         display: inline-block;
//       }
//       i {
//         position: absolute;
//         left: 0;
//         display: block;
//         width: 100%;
//         height: 1px;
//         background: ${({ theme }) => theme.colors.white_color};
//         transition: all 0.3s;
//         &:first-child {
//           top: 50%;
//           margin-top: -1px;
//           transform: rotate(135deg);
//         }
//         &:nth-of-type(2) {
//           opacity: 0;
//         }
//         &:last-child {
//           bottom: 50%;
//           margin-bottom: -1px;
//           transform: rotate(-135deg);
//         }
//       }
//     }
//   }
// `;

const Num = styled.div`
  bottom: 7px;
  font-size: 17px;
`;

export default SideMenu;
