import React from 'react';
import PropTypes from 'prop-types';
import Master from 'composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { CartTable } from '../cart/Cart.styled';

const displayName = 'Confirmation';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  quantity: PropTypes.objectOf(PropTypes.number),
  values: PropTypes.objectOf(PropTypes.object).isRequired,
};

const defaultProps = {
  quantity: {},
};

function Confirmation({
  myProducts, total, quantity, values,
}) {
  return (
    <Master title="Confirmation">
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
            {myProducts.map(product => (
              <CartItem key={product.id} {...product} controls={false} quantity={quantity[product.id]} />
            ))}
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      <div data-name="user-info-name">
        {values.name}
      </div>
      <div data-name="user-info-email">
        {values.email}
      </div>
      <div data-name="user-info-age">
        {values.age}
      </div>
    </Master>
  );
}

Confirmation.displayName = displayName;
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;

export default Confirmation;
