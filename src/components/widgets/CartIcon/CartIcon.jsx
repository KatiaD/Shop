import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartIcon({ size }) {
  return (
    <Link to="/cart">
      Cart:
      {size}
    </Link>
  );
}

CartIcon.displayName = 'CartIcon';
CartIcon.prototype = {
  size: PropTypes.number.isRequired,
};
export default CartIcon;
