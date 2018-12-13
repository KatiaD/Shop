import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Master from 'composables';
import UserForm from 'components/widgets/UserForm';
import { CartItem } from 'components/widgets';
import { CartTable } from './Cart.styled';

const displayName = 'Cart';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, address: PropTypes.string }),
  quantity: PropTypes.objectOf(PropTypes.number),
  handlePlusItem: PropTypes.func.isRequired,
  handleMinusItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  user: {},
  quantity: [{}],
};

function Cart({
  myProducts,
  total,
  handlePlusItem,
  handleMinusItem,
  handleSubmit,
  quantity,
}) {
  return (
    <Master title="Cart" total={total}>
      {total ? (
        <CartTable>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {
              myProducts.map(product => (
                <CartItem
                  key={product.id}
                  {...product}
                  plus={handlePlusItem}
                  minus={handleMinusItem}
                  controls="true"
                  quantity={quantity[product.id]}
                />
              ))
            }
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      {
        total ? (
          <div>
            <UserForm handleSubmit={handleSubmit} />
          </div>
        ) : ''
      }
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
