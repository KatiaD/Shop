import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addToCart } from 'actions';
import ProductItem from './ProductItem';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  connect(
    null,
    dispatch => ({
      handleAddToCart: bindActionCreators(addToCart, dispatch),
    }),
  ),
  setPropTypes({
    id: PropTypes.number.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
  }),
  withHandlers({
    onAddToCart: props => () => {
      props.handleAddToCart(props.id);
    },
  }),
);

export default enhance(ProductItem);
