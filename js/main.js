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
// 에러 -> alert으로
// const articleBtn = document.querySelector("#article");
const productListBtn = document.querySelector("#productList");
const productIdInput = document.querySelector("#productIdInput");

const productGet = document.querySelector("#productGet");
const productDelete = document.querySelector("#productDelete");
const productCreate = document.querySelector("#productCreate");
const productPatch = document.querySelector("#productPatch");

const products = document.querySelectorAll("#productForm input");
const productsList = [...products];

const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

// 초기화
reset.addEventListener("click", () => {
  result.textContent = "";
});

// 상품 리스트 가져오기
productListBtn.addEventListener("click", async () => {
  const product = await getProductList();
  result.textContent = JSON.stringify(product, null, 2);
});

// ID에 해당하는 상품 가져오기
productGet.addEventListener("click", async () => {
  const product = await getProduct(productIdInput.value);
  result.textContent = JSON.stringify(product, null, 2);
  productIdInput.value = ""; // 해당 칸이 비어지는 지 확인
});

// 상품 생성
productCreate.addEventListener("click", async (event) => {
  event.preventDefault();

  const product = {};

  productsList.forEach((input) => {
    product[input.name] =
      input.name === "images" || input.name === "tags"
        ? input.value.split(",").map((item) => item.trim())
        : input.value;
  });

  const res = await createProduct(product);
  result.textContent = JSON.stringify(res, null, 2);

  productsList.forEach((input) => (input.value = ""));
});

// 상품 수정
productPatch.addEventListener("click", async (event) => {
  event.preventDefault();

  const product = {};

  productsList.forEach((input) => {
    product[input.name] =
      input.name === "images" || input.name === "tags"
        ? input.value.split(",").map((item) => item.trim())
        : input.value;
  });

  const productId = productIdInput.value;

  const res = await patchProduct(productId, product);
  result.textContent = JSON.stringify(res, null, 2);

  productIdInput.value = "";
  productsList.forEach((input) => (input.value = ""));
});

// 상품 삭제
productDelete.addEventListener("click", async () => {
  const product = await deleteProduct(productIdInput.value);
  result.textContent = JSON.stringify(product, null, 2);
  productIdInput.value = "";
});

const articleListBtn = document.querySelector("#articleList");
const articleIdInput = document.querySelector("#articleIdInput");

const articleGet = document.querySelector("#articleGet");
const articleDelete = document.querySelector("#articleDelete");
const articleCreate = document.querySelector("#articleCreate");
const articlePatch = document.querySelector("#articlePatch");

const articles = document.querySelectorAll("#articleForm input");
const articlesList = [...articles];

// 상품 리스트 가져오기
articleListBtn.addEventListener("click", async () => {
  const article = await getArticleList();
  result.textContent = JSON.stringify(article, null, 2);
});

// ID에 해당하는 상품 가져오기
articleGet.addEventListener("click", async () => {
  const article = await getArticle(articleIdInput.value);
  result.textContent = JSON.stringify(article, null, 2);
  articleIdInput.value = ""; // 해당 칸이 비어지는 지 확인
});

// 상품 생성
articleCreate.addEventListener("click", async (event) => {
  event.preventDefault();

  const article = new FormData();

  articlesList.forEach((input) => article.append(input.name, input.value));

  const res = await createArticle(article);
  result.textContent = JSON.stringify(res, null, 2);

  articlesList.forEach((input) => (input.value = ""));
});

// 상품 수정
articlePatch.addEventListener("click", async (event) => {
  event.preventDefault();

  const article = new FormData();

  articlesList.forEach((input) => article.append(input.name, input.value));

  const articleId = articleIdInput.value;

  const res = await patchArticle(articleId, article);
  result.textContent = JSON.stringify(res, null, 2);

  articleIdInput.value = "";
  articlesList.forEach((input) => (input.value = ""));
});

// 상품 삭제
articleDelete.addEventListener("click", async () => {
  const article = await deleteArticle(articleIdInput.value);
  result.textContent = JSON.stringify(article, null, 2);
  articleIdInput.value = "";
});
