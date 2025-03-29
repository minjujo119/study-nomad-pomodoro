import styled from "styled-components";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { isPlayAtom } from "../data/atom";

// style
const TimeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  font-weight: 700;
  color: white;
`;
const Time = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  color: tomato;
`;

const Timer = () => {
  const [second, setSecond] = useState(25 * 60);
  const isPlay = useRecoilValue(isPlayAtom);
  const timerID = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isPlay) return; // isPlay가 false면 인터벌 호출 X

    // 렌더링될 때마다 인터벌 호출해서 second 값을 1씩 빼기
    timerID.current = setInterval(() => {
      if (second > 0) setSecond((current) => current - 1);
      else setSecond(0);
    }, 1000);

    // 언마운트 될 때 인터벌 제거하여 중복 방지
    return () => clearInterval(timerID.current);
  }, [second, isPlay]);

  // second를 60으로 나눈 후 몫은 분이 되고 나머지는 초가 됨.
  const StringMinute = String(Math.floor(second / 60));
  const StringSecond = String(second % 60);

  return (
    <TimeWrap>
      <Time>
        {StringMinute.length === 1 ? `0${StringMinute}` : StringMinute}
      </Time>
      <span>:</span>
      <Time>
        {StringSecond.length === 1 ? `0${StringSecond}` : StringSecond}
      </Time>
    </TimeWrap>
  );
};

export default Timer;
