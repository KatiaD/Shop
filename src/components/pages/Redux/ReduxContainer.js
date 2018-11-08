import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions';
import { getProducts } from 'selectors';
import Redux from './Redux';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  connect(
    state => ({
      myProducts: getProducts(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchFetchProducts: fetchProducts,
      },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    changeName: ({ setName }) => (event) => {
      setName(event.currentTarget.value);
    },
    handleFetchProducts: ({ dispatchFetchProducts }) => () => {
      dispatchFetchProducts();
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.handleFetchProducts();
    },
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
  })),
);

export default enhance(Redux);
