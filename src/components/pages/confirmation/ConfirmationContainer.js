import {
  compose, setDisplayName, mapProps,
} from 'recompose';
import { getFormValues } from 'redux-form/immutable';
import { connect } from 'react-redux';
import {
  getTotal, getQuantity, getCartProducts,
} from 'selectors';

import Confirmation from './Confirmation';

export const enhance = compose(
  setDisplayName('ConfirmationContainer'),
  connect(
    state => ({
      values: getFormValues('syncValidation')(state),
      myProducts: getCartProducts(state),
      quantity: getQuantity(state),
      total: getTotal(state),
    }),
  ),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    quantity: props.quantity.toJS(),
    values: props.values.toJS(),
  })),
);

export default enhance(Confirmation);
