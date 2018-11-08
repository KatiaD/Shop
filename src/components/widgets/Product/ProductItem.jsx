import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/controls';

const displayName = 'ProductItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};


function Product({
  id,
  name,
  price,
  onAddToCart,
}) {
  return (
    name && (
      <div data-name={name}>
        {id}
        {name}
        {price}
        <Button onClick={onAddToCart} value="addToCart">
          Bye
        </Button>
      </div>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
