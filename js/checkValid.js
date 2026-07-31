"use strict";

export function checkValidResponse(response) {
  if (!response.ok) {
    throw new Error(
      `HTTP 통신 오류: ${response.status} ${response.statusText}`,
    );
  }
}

export function checkValidId(articleId) {
  if (!articleId) {
    throw new Error(`게시글 ID 번호를 입력해주세요`);
  }
}
