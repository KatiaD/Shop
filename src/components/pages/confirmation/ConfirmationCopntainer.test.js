import React from 'react';
import { initialStoreState } from 'store';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { MemoryRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { getFormValues } from 'redux-form/immutable';
import { Map, List } from 'immutable';

import {
  getTotal,
  getQuantity,
  getCartProducts,
} from 'selectors';

import { enhance } from './ConfirmationContainer';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const testProps = {
  myProducts: List([Map({ id: 1, name: 'Ball', image: 'image' })]),
  quantity: 5,
  total: 10,
  values: 7,
};

describe('Given a ConfirmationContainer enhancer', () => {
  describe('when the enhancer is rendered', () => {
    let providedProps;

    beforeEach(() => {
      const ConfirmationContainer = enhance(
        createSink(props => (providedProps = props))
      );
      mount(
        <MemoryRouter>
          <Provider store={testStore}>
            <ConfirmationContainer {...testProps} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.myProducts).toEqual(
        getCartProducts(testStore.getState()).toJS(),
      );

      expect(providedProps.quantity).toEqual(
        getQuantity(testStore.getState()).toJS(),
      );
      expect(providedProps.total).toEqual(getTotal(testStore.getState()));
    });
  });
});
