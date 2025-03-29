import styled from "styled-components";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { isPlayAtom, timeAtom } from "../data/atom";

// styles
const TimeWrap = styled(motion.div)`
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
// motions
const timeMotion = {
  initial: { opacity: 0.7, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0.7, scale: 0.7 },
};

const Timer = () => {
  // const [minute, setMinute] = useState(0);
  // const [second, setSecond] = useState(0);
  const isPlay = useRecoilValue(isPlayAtom);
  const [time, setTime] = useRecoilState(timeAtom);
  const timerID = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isPlay) return; // isPlay가 false면 인터벌 호출 X

    // 렌더링될 때마다 인터벌 호출해서 second 값을 1씩 빼기
    timerID.current = setInterval(() => {
      if (time > 0) setTime((current: number) => current - 1);
      else setTime(0);
    }, 1000);

    // 언마운트 될 때 인터벌 제거하여 중복 방지
    return () => clearInterval(timerID.current);
  }, [time, isPlay]);

  // time 60으로 나눈 후 몫은 분이 되고 나머지는 초가 됨.

  const StringMinute = String(Math.floor(time / 60));
  const StringSecond = String(time % 60);

  return (
    <TimeWrap>
      <Time
        key={StringMinute}
        variants={timeMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {StringMinute.length === 1 ? `0${StringMinute}` : StringMinute}
      </Time>
      <span>:</span>
      <Time
        key={StringSecond}
        variants={timeMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {StringSecond.length === 1 ? `0${StringSecond}` : StringSecond}
      </Time>
    </TimeWrap>
  );
};

export default Timer;
