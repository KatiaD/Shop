import { compose, withState, setDisplayName, mapProps } from "recompose";
import { connect } from "react-redux";
import { getCartProducts } from "selectors";

import Master from "./Master";

export const enhance = compose(
  setDisplayName("AboutContainer"),
  connect(state => ({
    count: getCartProducts(state).length
  })),
  withState("name", "setName", ""),
  mapProps(props => ({
    ...props,
    count
  }))
);

export default enhance(Master);
