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

// const result1 = await getProductList({});
// const result2 = await getProduct(4233);
// const result3 = await createProduct();
// const result4 = await patchProduct(4233);
// const result5 = await deleteProduct(4233);

// const result1 = await getArticleList({ keyword: "" });
// const result2 = await getArticle(1111);
// const result3 = await createArticle();
// const result4 = await patchArticle(1111);
// const result5 = await deleteArticle(1111);

button.addEventListener("click", function () {
  // if (result1) console.log(result1);
  // if (result2) console.log(result2);
  // if (result3) console.log(result3);
  // if (result4) console.log(result4);
  // if (result5) console.log(result5);
});
