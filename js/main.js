"use strict";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  // API 활용하기 (목록 불러오기 등)
  getProduct(4000);
  console.log("입력");
});
