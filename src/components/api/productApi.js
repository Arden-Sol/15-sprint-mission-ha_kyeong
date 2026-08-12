'use strict';

import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://panda-market-api.vercel.app',
});

async function getProducts({ page = 1, pageSize = 10 }) {
  const res = await instance.get('/products', {
    params: { page, pageSize },
  });

  return res.data;
}

async function createProduct(productData) {
  const res = await instance.post('/products', {
    productData,
  });

  return res.data;
}

export { getProducts, createProduct };
