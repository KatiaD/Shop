import React from 'react';
import { Link } from 'react-router-dom';

import cart from 'images/cart.png';
import { HeaderWrapper, HeaderTitle, Cart, CartWrapper, Total } from './Header.styled';

const displayName = 'Header';

function Header({title, total}) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Sports Store - {title}
        <CartWrapper>
        {
          (title == 'Products') && 
          <Link to='/cart'>
          <Cart src={cart} alt="" />
          <Total>{total}</Total> 
          </Link>
        }
        </CartWrapper>

      </HeaderTitle>
    </HeaderWrapper>
  );
}

Header.displayName = displayName;

export default Header;