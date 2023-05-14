import styled from "styled-components";

function SectionProfile() {
  return (
    <Container id="skills">
      <Wrap>
        <TextLine01>
          <ContentWrap>
            <h2>CAREER</h2>
            <h3>2019.07 - 2021.08</h3>
            <p>(주)단비 빅데이터팀 / 빅데이터 시각화</p>
          </ContentWrap>
        </TextLine01>
        <TextLine02>
          <h2>EDUCATION</h2>
          <ContentWrap>
            <h3>2023.01.09 - 2023.02.28</h3>
            <p>프론트엔드 웹 개발자 양성 과정</p>
          </ContentWrap>
          <p>HTML5, CSS3, Java Script, JQuery, React</p>
        </TextLine02>
        <TextLine03>
          <h3>2021.09.07 - 2022.01.25</h3>
          <p>(디지털디자인)UI/UX 반응형 웹디자인 & 웹퍼블리셔B 수료</p>
        </TextLine03>
        <TextLine04>
          <h3>2008.03.03 - 2014.08.14</h3>
          <p>부산외국어대학교 한국어문학부 졸업 /부전공: 일본어문학료</p>
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
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  font-weight: 600;
  h2 {
    font-size: 1.5rem;
    &:hover {
      color: #ce5959;
    }
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #539165;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #0066ff;
    }
  }
`;

const TextLine02 = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  h2 {
    font-size: 1.5rem;
    &:hover {
      color: #ce5959;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #539165;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: right;
    &:hover {
      color: #0066ff;
    }
  }
`;

const TextLine03 = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #539165;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #0066ff;
    }
  }
`;
const TextLine04 = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #539165;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #0066ff;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
