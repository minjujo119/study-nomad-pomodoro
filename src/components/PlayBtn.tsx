import styled from "styled-components";
import { motion } from "motion/react";
import { useRecoilState } from "recoil";
import { isPlayAtom } from "../data/atom";

// styles
const Btn = styled(motion.button)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  color: white;
`;

const iconMotion = {
  hover: { scale: 1.1 },
  active: { scale: 0.7, opacity: 0.7 },
};

const PlayBtn = () => {
  // 재생/일시정지 토글
  const [isPlay, setIsPlay] = useRecoilState(isPlayAtom);
  const togglePlayBtn = () => setIsPlay((prev) => !prev);

  return (
    <Btn
      onClick={togglePlayBtn}
      variants={iconMotion}
      whileHover="hover"
      whileTap="active"
    >
      {isPlay ? (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Zm4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Z"
          ></path>
        </svg>
      ) : (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
          ></path>
        </svg>
      )}
    </Btn>
  );
};

export default PlayBtn;
