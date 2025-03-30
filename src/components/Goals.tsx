import styled from "styled-components";
import { motion } from "motion/react";
import { useRecoilState } from "recoil";
import { roundAtom, goalAtom } from "../data/atom";
import { defaultValues } from "../data/atom";
import { useEffect } from "react";

// styles
const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;
const RoundNumber = styled(motion.div)`
  margin-top: 10px;
`;
const GoalNumber = styled(motion.div)`
  margin-top: 10px;
`;

const Goals = () => {
  const [round, setRound] = useRecoilState(roundAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);

  useEffect(() => {
    // round 완료 시 goal 1씩 증가
    if (round === defaultValues.round && goal < defaultValues.goal) {
      setRound(0);
      setGoal((current) => current + 1);

      // goal 완료 시 알림창 띄우기
    } else if (goal === defaultValues.goal) {
      alert("Congratulations!");
    }
  }, [round, goal, setRound, setGoal]);

  return (
    <Wrap>
      <div>
        ROUND
        <RoundNumber>{`${round} / ${defaultValues.round}`}</RoundNumber>
      </div>
      <div>
        GOAL
        <GoalNumber>{`${goal} / ${defaultValues.goal}`}</GoalNumber>
      </div>
    </Wrap>
  );
};

export default Goals;
