import {
  compose, setDisplayName,
} from 'recompose';
import { connect } from 'react-redux';

import { getProductInCart } from 'selectors';
import CartIcon from './CartIcon';


export const enhance = compose(
  setDisplayName('CartIconContainer'),
  connect(
    state => ({
      ...getProductInCart(state),
    }),
    null,
  ),
);

export default enhance(CartIcon);
