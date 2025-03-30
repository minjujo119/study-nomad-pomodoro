import styled from "styled-components";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isPlayAtom, timeAtom, roundAtom } from "../data/atom";
import { defaultValues } from "../data/atom";

// styles
const Wrap = styled(motion.section)`
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
  const [isPlay, setIsPlay] = useRecoilState(isPlayAtom);
  const [time, setTime] = useRecoilState(timeAtom);
  const setRound = useSetRecoilState(roundAtom);

  useEffect(() => {
    // isPlay가 false면 인터벌 호출 X
    if (!isPlay) return; 

    // 렌더링될 때마다 인터벌 호출해서 second 값을 1씩 빼기
    const timerID = setInterval(() => {
      if (time > 0) {
        setTime((current) => current - 1);

        // 시간이 0이 되었을 때 초기값으로 돌리고 round값 1 증가
      } else if (time === 0) {
        setTime(defaultValues.time);
        setRound((current) => current + 1);
        setIsPlay(false);

        // time이 음수가 되는 것 방지
      } else {
        setTime(0);
      }
    }, 1000);

    // 언마운트 될 때 인터벌 제거하여 중복 방지
    return () => clearInterval(timerID);

  }, [time, isPlay, setTime, setRound, setIsPlay]);

  // time 60으로 나눈 후 몫은 분이 되고 나머지는 초가 됨.
  const StringMinute = String(Math.floor(time / 60));
  const StringSecond = String(time % 60);

  return (
    <Wrap variants={timeMotion} initial="initial" animate="animate" exit="exit">
      <Time key={StringMinute} variants={timeMotion}>
        {StringMinute.length === 1 ? `0${StringMinute}` : StringMinute}
      </Time>
      <span>:</span>
      <Time key={StringSecond} variants={timeMotion}>
        {StringSecond.length === 1 ? `0${StringSecond}` : StringSecond}
      </Time>
    </Wrap>
  );
};

export default Timer;
