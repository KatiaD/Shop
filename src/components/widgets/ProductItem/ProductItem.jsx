import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/controls";
import { ProductItemContainer } from "./ProductItem.styled";

const displayName = "Product";

const propTypes = {
  name: PropTypes.string.isRequired
};

function Product({ name, price, image, text, handleAddToCart, onAddToCart }) {
  return (
    name && (
      <ProductItemContainer data-name={name}>
        <img src={image} />
        {name}
        {price}
        {text}
        {" - "}
        <Button accent onClick={handleAddToCart} onAddToCart>
          Add to cart
        </Button>
      </ProductItemContainer>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
