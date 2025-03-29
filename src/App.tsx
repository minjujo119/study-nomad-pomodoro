// 25분 타이머가 있어야함 (MM:SS 형식)
// 플레이/일시정지 버튼 있어야함 - 모션 애니메이션 있어야함
// 타이머 숫자 애니메이션 있어야함
// 리코일로 타이머 상태 관리하자
// 총 4개 라운드 있어야함

import styled from "styled-components";
import Timer from "./components/Timer";
import PlayBtn from "./components/PlayBtn";


const Wrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;
  background-color: tomato;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: white;
`;

function App() {

  return (
    <Wrap>
      <Title>Pomodoro</Title>
      <Timer/>
      <PlayBtn></PlayBtn>
    </Wrap>
  );
}

export default App;
