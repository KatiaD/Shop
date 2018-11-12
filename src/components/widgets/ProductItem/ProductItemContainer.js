import { compose, setDisplayName, withHandlers, setPropTypes } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";
import { addToCartIcon } from "actions";

export const enhance = compose(
  setDisplayName("ProductContainer"),
  setPropTypes({
    id: PropTypes.number.isRequired,
    AddToCart: PropTypes.func.isRequired,
    handleAddToCartIcon: PropTypes.func.isRequired
  }),
  connect(
    null,
    dispatch => ({
      Icon: bindActionCreators(addToCartIcon, dispatch)
    })
  ),
  withHandlers({
    Icon: props => () => {
      props.handleAddToCartIcon(props.id);
    },
    handleAddToCart: ({ id, AddToCart }) => () => AddToCart(id)
  })
);

export default enhance(ProductItem);
