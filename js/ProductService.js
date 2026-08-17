"use strict";

import { instance, checkValidId } from "./checkValid.js";

export const ProductApi = {
  getList: getProductList,
  get: getProduct,
  create: createProduct,
  patch: patchProduct,
  remove: deleteProduct,
};

async function getProductList({ page = 1, pageSize = 5, keyword = "" } = {}) {
  try {
    const response = await instance.get("/products", {
      params: { page, pageSize, keyword },
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

async function createProduct(productData) {
  try {
    const response = await instance.post(`/products/`, productData);

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

async function patchProduct(productId, productData) {
  try {
    checkValidId(productId);

    const response = await instance.patch(
      `/products/${productId}`,
      productData,
    );

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
