"use strict";

import { instance, checkValidId } from "./checkValid.js";

export const ArticleApi = {
  getList: getArticleList,
  get: getArticle,
  create: createArticle,
  patch: patchArticle,
  remove: deleteArticle,
};

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

function createArticle(articleData) {
  return instance
    .post("/articles", articleData)
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

function patchArticle(articleId, articleData) {
  checkValidId(articleId);

  return instance
    .patch(`/articles/${articleId}`, articleData)
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
