import React from 'react';
import PropTypes from 'prop-types';
import Master from 'composables';

import { ProductItem } from 'components/widgets';
import ProductWrapper from './Category.styled';

const displayName = 'Category';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  total: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const defaultProps = {

};

function Category({
  myProducts,
  handleAddToCart,
  total,
}) {
  const totalItems = total ? total.length : 0;
  return (
    <Master title="Products" total={totalItems}>
      <ProductWrapper>

        {myProducts.map(product => (
          <ProductItem key={product.id} {...product} AddToCart={handleAddToCart} />
        ))}
      </ProductWrapper>
    </Master>
  );
}

Category.displayName = displayName;
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
