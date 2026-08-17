"use strict";

export const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

export function checkValidId(id) {
  if (!id) {
    const error = new Error("ID 번호를 입력해주세요");
    error.name = "ValidationError";
    throw error;
  }
}
