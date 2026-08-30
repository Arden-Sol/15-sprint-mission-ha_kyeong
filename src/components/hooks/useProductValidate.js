import { useState } from 'react';

export function useProductValidate() {
  const [validErrorName, setValidErrorName] = useState(false);
  const [validErrorDescription, setValidErrorDescription] = useState(false);
  const [validErrorPrice, setValidErrorPrice] = useState(false);
  const [validErrorTag, setValidErrorTag] = useState(false);

  const validateName = (value) => {
    setValidErrorName(!value || value.length > 10);
  };

  const validateDescription = (value) => {
    setValidErrorDescription(!value || value.length > 100 || value.length < 10);
  };

  const validatePrice = (value) => {
    setValidErrorPrice(
      !value || Number.isNaN(value) || value < 1 || !Number.isInteger(value),
    );
  };

  const validateTags = (value, isDuplicate) => {
    if (value.length > 5) {
      setValidErrorTag('length');
    } else if (isDuplicate) {
      setValidErrorTag('duplicate');
    } else {
      setValidErrorTag(false);
    }
  };

  const value = {
    validateName,
    validateDescription,
    validatePrice,
    validateTags,
    validErrorName,
    validErrorDescription,
    validErrorPrice,
    validErrorTag,
  };

  return value;
}

export default useProductValidate;
