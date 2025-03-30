import { atom } from "recoil";

export const isPlayAtom = atom({
  key: "isPlay",
  default: false,
});

// 타이머 설정값 관리
export const defaultValues = {
  time: 25 * 60,
  round: 4,
  goal: 12,
};

export const timeAtom = atom({
  key: "time",
  default: defaultValues.time,
});

export const roundAtom = atom({
  key: "round",
  default: 0,
});

export const goalAtom = atom({
  key: "goal",
  default: 0,
});
