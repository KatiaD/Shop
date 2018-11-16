import React from 'react';
import { Master } from 'composables';

import { ProductItem } from 'components/widgets';
import { ProductWrapper } from './Category.styled';

const displayName = 'Category';

function Category({
  myProducts,
  handleAddToCart,
  total
}) {
  const totalItems = total ? total.length : 0;

  return (
    <Master title="Products" total={ totalItems }>
      <ProductWrapper>
        {myProducts.map(product => (
          <ProductItem key={product.id} {...product} AddToCart={handleAddToCart}/>
        ))}
      </ProductWrapper>
    </Master>
  );
}

Category.displayName = displayName;

export default Category;
