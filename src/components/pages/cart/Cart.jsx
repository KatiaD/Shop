import React from "react";
import { Master } from "components/composables";
import { Link } from "react-router-dom";
import { CartItem } from "components/widgets";
import { CartTable } from "./Cart.styled";

const displayName = "Category";

function Cart({ myProducts, total }) {
  return (
    <Master title="Cart">
      {total ? (
        <CartTable>
          <thead>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </thead>
          {myProducts.map(product => (
            <CartItem key={product.id} {...product} />
          ))}
        </CartTable>
      ) : (
        "Cart is empty"
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
    </Master>
  );
}

Cart.displayName = displayName;

export default Cart;
