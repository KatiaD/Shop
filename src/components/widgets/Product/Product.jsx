import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import { ProductContainer, Price, Name } from './Product.styled';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function Product({ name, image, price, handleAddToCart}) {
  return (
    name && (
      <ProductContainer data-name={name}>
        <img src={image} />
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <Button name='buy' onClick={handleAddToCart}>
          Buy
        </Button>
      </ProductContainer>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
