import { atom } from "recoil";

export const userRecoilState = atom({
  key: "userRecoilState",
  default: {
    email: "test@test.com",
    pw: "test!",
    profile: "https://static.wanted.co.kr/images/avatars/1505318/1bc915d2.jpg",
    nickName: "숩",
  },
});
