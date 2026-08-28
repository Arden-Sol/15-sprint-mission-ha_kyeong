'use strict';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',
});

async function getProducts({ offset = 1, limit = 10, orderBy, keyword }) {
  const res = await instance.get('/products', {
    params: { offset, limit, orderBy, keyword },
  });

  return await res.data;
}

async function createProduct(productData) {
  const res = await instance.post('/products', productData);

  return res.data;
}

export const productApi = { get: getProducts, post: createProduct };
