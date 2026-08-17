"use strict";

export const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

export function checkValidId(id) {
  if (!id) {
    throw new Error(`ID 번호를 입력해주세요`);
  }
}
