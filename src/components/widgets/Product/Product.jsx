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
        <Button style={{ height: 30, borderRadius: 4, fontSize: 12, }}accent onClick={handleAddToCart}>
          Buy
        </Button>
      </ProductContainer>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
