"use strict";

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

export function checkValidId(id) {
  if (!id) {
    throw new Error(`ID 번호를 입력해주세요`);
  }
}

async function getProductList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  try {
    const response = await instance.get("/products", {
      page,
      pageSize,
      keyword,
    });

    return response.data;
  } catch (error) {
    console.error("getProductList 오류", error);

    if (error.response) {
      console.error("Status: ", error.response.status);
      console.error("Data: ", error.response.data);
    }

    throw error;
  }
}

async function getProduct(productId) {
  try {
    checkValidId(productId);

    const response = await instance.get(`/products/${productId}`);

    return response.data;
  } catch (error) {
    console.error("getProduct 오류", error);

    if (error.response) {
      console.error("Status: ", error.response.status);
      console.error("Data: ", error.response.data);
    }

    throw error;
  }
}

async function createProduct({
  name = "상품 이름",
  description = "상품 설명",
  price = 1000,
  images = ["https://example.com/..."],
  tags = ["전자제품"],
} = {}) {
  try {
    const response = await instance.post(`/products/`, {
      name,
      description,
      price,
      images,
      tags,
    });

    return response.data;
  } catch (error) {
    console.error("createProduct 오류", error);

    if (error.response) {
      console.error("Status: ", error.response.status);
      console.error("Data: ", error.response.data);
    }

    throw error;
  }
}

async function patchProduct(
  productId,
  {
    name = "상품 이름",
    description = "상품 설명",
    price = 1000,
    images = ["https://example.com/..."],
    tags = ["전자제품"],
  } = {},
) {
  try {
    checkValidId(productId);

    const response = await instance.patch(`/products/${productId}`, {
      name,
      description,
      price,
      images,
      tags,
    });

    return response.data;
  } catch (error) {
    console.error("patchProduct 오류", error);

    if (error.response) {
      console.error("Status: ", error.response.status);
      console.error("Data: ", error.response.data);
    }

    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    checkValidId(productId);

    const response = await instance.delete(`/products/${productId}`);

    return response.data;
  } catch (error) {
    console.error("deleteProduct 오류", error);

    if (error.response) {
      console.error("Status: ", error.response.status);
      console.error("Data: ", error.response.data);
    }

    throw error;
  }
}
