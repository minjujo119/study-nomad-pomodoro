// 25분 타이머가 있어야함 (MM:SS 형식)
// 플레이/일시정지 버튼 있어야함 - 모션 애니메이션 있어야함
// 타이머 숫자 애니메이션 있어야함
// 리코일로 타이머 상태 관리하자
// 총 4개 라운드 있어야함

import styled from "styled-components";
import { motion } from "motion/react";
import { useRecoilState } from "recoil";
import { isPlayAtom } from "./data/atom";
import SvgIcon from "./data/SvgPath";
import Timer from "./components/Timer";


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
const PlayBtn = styled(motion.button)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  color: white;
`;
function App() {

  // 재생/일시정지 토글
  const [isPlay, setIsPlay] = useRecoilState(isPlayAtom);
  const togglePlayBtn = () => setIsPlay((prev) => !prev);
  console.log(isPlay);

  // 모션 구현
  // const TimeVariants = {
  //   initial: {},
  //   animate: {},
  //   exit: {},
  // };

  return (
    <Wrap>
      <Title>Pomodoro</Title>
      <Timer/>
      <PlayBtn onClick={togglePlayBtn}>
        <SvgIcon />
      </PlayBtn>
    </Wrap>
  );
}

export default App;
