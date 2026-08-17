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
