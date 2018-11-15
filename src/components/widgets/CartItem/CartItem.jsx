import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';

import { CartContainer, Price, Name } from './CartItem.styled';

const displayName = 'CartItem';

const propTypes = {
  id: PropTypes.string.isRequired,
};

function CartItem({
  name,
  image,
  quantity,
  id,
  price,
  handlePlusItem,
  handleMinusItem,
  controls
}) {
  return (
    id && (
      <CartContainer data-name={id} key={id}>
        <img src={image} />
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <div>
          {
            controls ?
              <div>
                <Button onClick={handleMinusItem}>-</Button>
                {quantity}
                <Button onClick={handlePlusItem}>+</Button>
              </div>
              : quantity
          }
        </div>
        <Price>{price * quantity}$</Price>
      </CartContainer>
    )
  );
}

CartItem.displayName = displayName;
CartItem.propTypes = propTypes;

export default CartItem;
