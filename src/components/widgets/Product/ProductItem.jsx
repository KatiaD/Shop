import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/controls';
import { ProductContainer } from './ProductItem.styled';

const displayName = 'ProductItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

function Product({
  name,
  price,
  image,
  onAddToCart,
}) {
  return (
    name && (
      <ProductContainer data-name={name}>
      <img src={image} /> 
        {name}
        {price}
        <Button onClick={onAddToCart} value="addToCart">
          Bye
        </Button>
      </ProductContainer>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
