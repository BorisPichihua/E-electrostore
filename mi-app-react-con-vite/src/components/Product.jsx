import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>${price}</p>
    </div>
  );
};

export default Product;
