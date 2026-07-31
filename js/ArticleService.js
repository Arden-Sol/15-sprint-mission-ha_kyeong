"use strict";

const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

function checkValidResponse(response) {
  if (!response.ok) {
    throw new Error(
      `HTTP 통신 오류: ${response.status} ${response.statusText}`,
    );
  }
}

function checkValidId(articleId) {
  if (!articleId) {
    throw new Error(`게시글 ID 번호를 입력해주세요`);
  }
}

function getArticleList(
  { page = 1, pageSize = 10, keyword } = { page: 1, pageSize: 10 },
) {
  const articleUrl = new URL(BASE_URL);
  articleUrl.searchParams.set("page", page);
  articleUrl.searchParams.set("pageSize", pageSize);
  keyword && articleUrl.searchParams.set("keyword", keyword);

  return fetch(articleUrl).then((response) => {
    checkValidResponse(response);

    return response.json();
  });
}

function getArticle(articleId) {
  checkValidId(articleId);

  return fetch(`${BASE_URL}/${articleId}`).then((response) => {
    checkValidResponse(response);

    return response.json();
  });
}

function createArticle({
  title = "제목입니다",
  content = "내용입니다",
  image = "https://example.com/...",
} = {}) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    checkValidResponse(response);

    return response.json();
  });
}

function patchArticle({
  articleId,
  title = "게시글 제목입니다.",
  content = "게시글 내용입니다.",
  image = "https://example.com/...",
} = {}) {
  checkValidId(articleId);

  return fetch(`${BASE_URL}/${articleId}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      content,
      image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    checkValidResponse(response);

    return response.json();
  });
}

function deleteArticle(articleId) {
  checkValidId(articleId);

  return fetch(`${BASE_URL}/${articleId}`, {
    method: "DELETE",
  }).then((response) => {
    checkValidResponse(response);

    if (response.status === 204) {
      return;
    }

    return response.json();
  });
}
