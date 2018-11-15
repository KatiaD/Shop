import React from 'react';
import { Link } from 'react-router-dom';

import { Master } from 'composables';
import { Button, Input } from 'components/controls';
import { CartItem } from 'components/widgets';
import { CartWrapper, UserInfoWrap } from './Cart.styled';

const displayName = 'Category';

function Cart({
  myProducts,
  total,
  user,
  handlePlusItem,
  handleMinusItem,
  handleSubmit,
  handleSetUser,

}) {

  return (
    <Master title="Cart">
    <CartWrapper>
      {total ? (
        <div>
            {myProducts.map(product => (
              <CartItem key={product.id} {...product} plus={handlePlusItem} minus={handleMinusItem} controls="true" />
            ))}
        </div>
      ) : (
          'Cart is empty'
        )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      {
        total ?
          <UserInfoWrap>
            <Input name="name" placeholder="Type your name" value={user.name ? user.name : ''} onChange={handleSetUser} />
            <Input name="address" placeholder="Type your address" value={user.address ? user.address : ''} onChange={handleSetUser} />
            <Button onClick={handleSubmit}>Submit</Button>
          </UserInfoWrap> : ''
      }
      </CartWrapper>
    </Master>
  );
}

Cart.displayName = displayName;

export default Cart;