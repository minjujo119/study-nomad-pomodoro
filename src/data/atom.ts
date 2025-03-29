import { atom } from "recoil";

export const isPlayAtom = atom({
  key:"isPlay",
  default:false
});

export const timeAtom = atom({
  key:"time",
  default:300
});