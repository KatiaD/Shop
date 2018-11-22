import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import {
  ProductContainer, ProductName, ProductPriceBlock, ProductPrice,
} from './ProductItem.styled';

const displayName = 'ProductItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

function ProductItem({
  name, image, handleAddToCart, price,
}) {
  return (
    name && (
      <ProductContainer data-name={name}>
        <img src={image} alt="" />
        <ProductName>
          {name}
        </ProductName>
        <ProductPriceBlock>
          <ProductPrice>
            {price}
            {' '}
          $
          </ProductPrice>
          <Button accent onClick={handleAddToCart}>
            Buy
          </Button>
        </ProductPriceBlock>
      </ProductContainer>
    )
  );
}

ProductItem.displayName = displayName;
ProductItem.propTypes = propTypes;

export default ProductItem;
