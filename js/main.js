"use strict";

import { ProductApi } from "./ProductService.js";
import { ArticleApi } from "./ArticleService.js";

const productListBtn = document.querySelector("#productList");
const productIdInput = document.querySelector("#productIdInput");

const productGet = document.querySelector("#productGet");
const productDelete = document.querySelector("#productDelete");
const productCreate = document.querySelector("#productCreate");
const productPatch = document.querySelector("#productPatch");

const productsList = document.querySelectorAll("#productForm input");

const result = document.querySelector("#result");

const handleError = (error) => {
  if (error.name === "ValidationError") {
    alert(error.message);
  } else if (error.response?.status === 404) {
    alert("해당 상품을 찾을 수 없습니다.");
  } else if (error.response?.status === 400) {
    alert("잘못된 요청입니다.");
  } else {
    alert("서버와 통신하는 중 문제가 생겼습니다.");
  }
};

// 상품 리스트 가져오기
productListBtn.addEventListener("click", async () => {
  try {
    const product = await ProductApi.getList();
    result.textContent = JSON.stringify(product, null, 2);
  } catch (error) {
    handleError(error);
  }
});

// ID에 해당하는 상품 가져오기
productGet.addEventListener("click", async () => {
  try {
    const product = await ProductApi.get(productIdInput.value);
    result.textContent = JSON.stringify(product, null, 2);
  } catch (error) {
    handleError(error);
  }
  productIdInput.value = "";
});

// 상품 생성
productCreate.addEventListener("click", async (event) => {
  event.preventDefault();

  const product = {};

  productsList.forEach((input) => {
    product[input.name] =
      input.name === "images" || input.name === "tags"
        ? input.value.split(",").map((item) => item.trim())
        : input.name === "price"
          ? Number(input.value)
          : input.value;
  });

  try {
    const gettedProduct = await ProductApi.create(product);
    result.textContent = JSON.stringify(gettedProduct, null, 2);
  } catch (error) {
    handleError(error);
  }

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
        : input.value === "price"
          ? Number(input.value)
          : input.value;
  });

  const productId = productIdInput.value;

  try {
    const gettedProduct = await ProductApi.patch(productId, product);
    result.textContent = JSON.stringify(gettedProduct, null, 2);
  } catch (error) {
    handleError(error);
  }

  productIdInput.value = "";
  productsList.forEach((input) => (input.value = ""));
});

// 상품 삭제
productDelete.addEventListener("click", async () => {
  try {
    const product = await ProductApi.remove(productIdInput.value);
    result.textContent = JSON.stringify(product, null, 2);
  } catch (error) {
    handleError(error);
  }
  productIdInput.value = "";
});

const articleListBtn = document.querySelector("#articleList");
const articleIdInput = document.querySelector("#articleIdInput");

const articleGet = document.querySelector("#articleGet");
const articleDelete = document.querySelector("#articleDelete");
const articleCreate = document.querySelector("#articleCreate");
const articlePatch = document.querySelector("#articlePatch");

const articlesList = document.querySelectorAll("#articleForm input");

// 아티클 리스트 가져오기
articleListBtn.addEventListener("click", async () => {
  try {
    const article = await ArticleApi.getList();
    result.textContent = JSON.stringify(article, null, 2);
  } catch (error) {
    handleError(error);
  }
});

// ID에 해당하는 아티클 가져오기
articleGet.addEventListener("click", async () => {
  try {
    const article = await ArticleApi.get(articleIdInput.value);
    result.textContent = JSON.stringify(article, null, 2);
  } catch (error) {
    handleError(error);
  }
  articleIdInput.value = "";
});

// 아티클 생성
articleCreate.addEventListener("click", async (event) => {
  event.preventDefault();

  const article = {};

  articlesList.forEach((input) => (article[input.name] = input.value));

  try {
    const res = await ArticleApi.create(article);
    result.textContent = JSON.stringify(res, null, 2);
  } catch (error) {
    handleError(error);
  }

  articlesList.forEach((input) => (input.value = ""));
});

// 아티클 수정
articlePatch.addEventListener("click", async (event) => {
  event.preventDefault();

  const article = {};

  articlesList.forEach((input) => (article[input.name] = input.value));

  const articleId = articleIdInput.value;

  try {
    const res = await ArticleApi.patch(articleId, article);
    result.textContent = JSON.stringify(res, null, 2);
  } catch (error) {
    handleError(error);
  }

  articleIdInput.value = "";
  articlesList.forEach((input) => (input.value = ""));
});

// 아티클 삭제
articleDelete.addEventListener("click", async () => {
  try {
    const article = await ArticleApi.remove(articleIdInput.value);
    result.textContent = JSON.stringify(article, null, 2);
  } catch (error) {
    handleError(error);
  }
  articleIdInput.value = "";
});
