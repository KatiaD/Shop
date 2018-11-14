import React from 'react';
import { Master } from 'composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { CartTable } from '../cart/Cart.styled';

const displayName = 'Confirmation';

function Confirmation({
  myProducts,
  total,
  user
}) {
  const totalItems = total ? total.length : 0;

  return (
    <Master title="Confirmation">
      {total ? (
        <CartTable>
          <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </tr>
          </thead>
          <tbody>
          {myProducts.map(product => (
            <CartItem key={product.id} {...product}  controls={false} />
          ))}
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      <div>Name: {user.name}</div>
      <div>Address: {user.address}</div>
    </Master>
  );
}

Confirmation.displayName = displayName;

export default Confirmation;
