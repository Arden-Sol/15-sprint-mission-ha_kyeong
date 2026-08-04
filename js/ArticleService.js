"use strict";

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

function checkValidId(id) {
  if (!id) {
    throw new Error(`ID 번호를 입력해주세요`);
  }
}

function getArticleList({ page = 1, pageSize = 5, keyword = "" } = {}) {
  return instance
    .get(`/articles`, { params: { page, pageSize, keyword } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("getArticleList 오류", error);

      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      }

      throw error;
    });
}

function getArticle(articleId) {
  // 입력값 검증 오류는 네트워크 오류와 구분하기 위해 fetch Promise 체인과 분리하여 처리합니다.
  checkValidId(articleId);

  return instance
    .get(`/articles/${articleId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("getArticle 오류", error);

      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      }

      throw error;
    });
}

function createArticle({
  title = "제목입니다",
  content = "내용입니다",
  image = "https://example.com/...",
} = {}) {
  return instance
    .post("/articles", { title, content, image })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("createArticle 오류", error);

      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      }

      throw error;
    });
}

function patchArticle(
  articleId,
  {
    title = "게시글 제목입니다.",
    content = "게시글 내용입니다.",
    image = "https://example.com/...",
  } = {},
) {
  checkValidId(articleId);

  return instance
    .patch(`/articles/${articleId}`, { title, content, image })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("patchArticle 오류", error);

      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      }

      throw error;
    });
}

function deleteArticle(articleId) {
  checkValidId(articleId);

  return instance
    .delete(`/articles/${articleId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("deleteArticle 오류", error);

      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      }

      throw error;
    });
}
