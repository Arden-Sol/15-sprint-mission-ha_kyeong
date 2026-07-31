"use strict";

import { checkValidResponse, checkValidId } from "./checkValid.js";

const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

async function getProductList(
  { page = 1, pageSize = 10, keyword } = { page: 1, pageSize: 10 },
) {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.set("page", page);
    url.searchParams.set("pageSize", pageSize);
    keyword && url.searchParams.set("keyword", keyword);

    const response = await fetch(url);

    checkValidResponse(response);

    return response.json();
  } catch (error) {
    console.error("getProductList 오류", error);
    throw error;
  }
}

async function getProduct(productId) {
  try {
    checkValidId(productId);

    const response = await fetch(`${BASE_URL}/${productId}`);

    checkValidResponse(response);

    return response.json();
  } catch (error) {
    console.error("getProduct 오류", error);
    throw error;
  }
}

async function createProduct({
  name = "상품 이름",
  description = "상품 설명",
  price = 1000,
  tags = ["전자제품"],
  images = ["https://example.com/..."],
} = {}) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    checkValidResponse(response);

    return response.json();
  } catch (error) {
    console.error("createProduct 오류", error);
    throw error;
  }
}

async function patchProduct({
  productId,
  name = "상품 이름",
  description = "상품 설명",
  price = 1000,
  tags = ["전자제품"],
  images = ["https://example.com/..."],
} = {}) {
  try {
    checkValidId(productId);

    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    checkValidResponse(response);

    return response.json();
  } catch (error) {
    console.error("patchProduct 오류", error);
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    checkValidId(productId);

    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    checkValidResponse(response);

    if (response.status === 204) {
      return;
    }

    return response.json();
  } catch (error) {
    console.error("deleteProduct 오류", error);
    throw error;
  }
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
