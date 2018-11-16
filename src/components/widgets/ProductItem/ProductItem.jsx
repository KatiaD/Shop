import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import { ProductItemContainer, Price, Name } from './ProductItem.styled';

const displayName = 'ProductItem';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function ProductItem({ name, image, price, handleAddToCart }) {
  return (
    name && (
      <ProductItemContainer data-name={name}>
        <img src={image} />
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <Button name='buy' onClick={handleAddToCart}>
          Buy
        </Button>
      </ProductItemContainer>
    )
  );
}

ProductItem.displayName = displayName;
ProductItem.propTypes = propTypes;

export default ProductItem;
