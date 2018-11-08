import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Redux } from 'components/pages';
import store from 'store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ThemeContext, * as themes from 'themes';

const displayName = 'App';

const propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
};

const defaultProps = {
  title: 'Hello, React by default!',
  theme: 'base',
};

export default function App({ title, theme }) {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes[theme]}>
        <h1>{title}</h1>
        <Router>
          <Route path="/shop" component={Redux} />
        </Router>
      </ThemeContext.Provider>
    </Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
