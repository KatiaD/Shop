import React from 'react';
import PropTypes from 'prop-types';
import Master from 'composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { Button } from '../../controls';
import { CartTable } from '../cart/Cart.styled';

const displayName = 'Confirmation';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, address: PropTypes.string }),
  quantity: PropTypes.objectOf(PropTypes.number),
};

const defaultProps = {
  user: {},
  quantity: {},
};

function Confirmation({
  myProducts,
  total,
  user,
  quantity,
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
            {
              myProducts.map(product => (
                <CartItem key={product.id} {...product} controls={false} quantity={quantity[product.id]} />
              ))
            }
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      <div>
        Name:
        {' '}
        {user.name}
      </div>
      <div>
        Address:
        {' '}
        {user.address}
      </div>
      <Button>Confirm</Button>
    </Master>
  );
}

Confirmation.displayName = displayName;
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;

export default Confirmation;
