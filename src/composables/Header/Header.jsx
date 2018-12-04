import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import cart from 'images/cart.png';
import {
  HeaderWrapper, HeaderTitle, Cart, CartWrapper, Total,
} from './Header.styled';

const displayName = 'Header';

const propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
};

const defaultProps = {
  title: '',
  total: 0,
};

function Header({ title, total }) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Watches Store -
        {title}
        <CartWrapper>
          {title === 'Products' && (
            <Link to="/cart" data-name="header-cart">
              <Cart src={cart} alt="" />
              <Total>{total}</Total>
            </Link>
          )}
        </CartWrapper>
      </HeaderTitle>
    </HeaderWrapper>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
