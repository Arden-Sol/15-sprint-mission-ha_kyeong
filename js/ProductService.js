"use strict";

const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

// 아래 두 함수는 ArticleService.js에서도 공통적으로 있는 함수 -> import해오는 것이 좋을지
function checkValidResponse(response) {
  if (!response.ok) {
    throw new Error(
      `HTTP 통신 오류: ${response.status} ${response.statusText}`,
    );
  }
}

function checkValidId(productId) {
  if (!productId) {
    throw new Error(`상품 ID 번호를 입력해주세요`);
  }
}

async function getProductList(
  { page = 1, pageSize = 10, keyword } = { page: 1, pageSize: 10 },
) {
  const url = new URL(BASE_URL);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  keyword && url.searchParams.set("keyword", keyword);

  const response = await fetch(url);

  checkValidResponse(response);

  return response.json();
}

async function getProduct(productId) {
  checkValidId(productId);

  const response = await fetch(`${BASE_URL}/${productId}`);

  checkValidResponse(response);

  return response.json();
}

// const result = await getProduct(4075);
// console.log(result);

async function createProduct({
  name = "상품 이름",
  description = "상품 설명",
  price = 1000,
  tags = ["전자제품"],
  images = ["https://example.com/..."],
} = {}) {
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
}

// const result2 = await createProduct({});
// console.log(result2);

async function patchProduct({
  productId,
  name = "상품 이름",
  description = "상품 설명",
  price = 1000,
  tags = ["전자제품"],
  images = ["https://example.com/..."],
} = {}) {
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
}

// const result3 = await patchProduct({ productId: 4104, name: "샴푸" });
// console.log(result3);

async function deleteProduct(productId) {
  checkValidId(productId);

  const response = await fetch(`${BASE_URL}/${productId}`, {
    method: "DELETE",
  });

  checkValidResponse(response);

  if (response.status === 204) {
    return;
  }

  return response.json();
}

// const result4 = await deleteProduct(4104);
// console.log(result4);
