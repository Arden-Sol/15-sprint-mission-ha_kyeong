"use strict";

export function checkValidResponse(response) {
  if (!response.ok) {
    throw new Error(
      `HTTP 통신 오류: ${response.status} ${response.statusText}`,
    );
  }
}

export function checkValidId(id) {
  if (!id) {
    throw new Error(`ID 번호를 입력해주세요`);
  }
}
