import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export const enhance = compose(
  setDisplayName('ProductItemContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    AddToCart: PropTypes.func.isRequired,
  }),
  withHandlers({
    handleAddToCart: ({ id, AddToCart }) => () => AddToCart(id),
  }),
);

export default enhance(ProductItem);
