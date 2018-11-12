import React from "react";
import { Master } from "components/composables";

import { ProductItem } from "components/widgets";
import { ProductWrapper } from "./Category.styled";

const displayName = "Category";

function Category({ myProducts, handleAddToCart }) {
  return (
    <Master title="Products">
      <ProductWrapper>
        {myProducts.map(product => (
          <ProductItem key={product.id} {...product} AddToCart={handleAddToCart} />
        ))}
      </ProductWrapper>
    </Master>
  );
}

Category.displayName = displayName;

export default Category;
