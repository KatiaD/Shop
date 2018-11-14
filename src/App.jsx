import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Cart, Category, Confirmation } from 'components/pages';

const displayName = 'App';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Sports store',
};

export default function App({ title }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route
            path="/cart"
            render={props => <Cart {...props}/>}
          />

          <Route
            path="/confirmation"
            component={props => <Confirmation {...props} extra={title} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;