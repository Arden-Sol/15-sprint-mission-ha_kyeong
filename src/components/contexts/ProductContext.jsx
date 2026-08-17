import { createContext, useContext } from 'react';

export const ProductContext = createContext(null);

export function useProductContext() {
  const context = useContext(ProductContext);

  if (context === null) {
    throw new Error('컨텍스트 사용 범위를 벗어났습니다.');
  }

  return context;
}
