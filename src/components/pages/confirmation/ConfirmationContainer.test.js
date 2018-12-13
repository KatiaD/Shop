import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { MemoryRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { getFormValues } from 'redux-form/immutable';
import { Map, List } from 'immutable';

import { getTotal, getQuantity, getCartProducts } from 'selectors';

import { enhance } from './ConfirmationContainer';

const testStore = configureStore([thunkMiddleware])(
  Map({
    products: List([
      Map({ name: 'GUNMETAL SANDSTONE', price: 140, id: 1 }),
      Map({ name: 'HUSTLE', price: 139, id: 2 }),
    ]),
    cart: List([1]),
    quantity: Map({ 4: 1 }),
    form: Map({
      syncValidation: Map({
        values: Map({
          name: 'testName',
          email: 'test@mail.com',
          age: '19',
        }),
      }),
    }),
  }),
);

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
            <ConfirmationContainer />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.myProducts).toEqual(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.quantity).toEqual(getQuantity(testStore.getState()).toJS());
      expect(providedProps.total).toEqual(getTotal(testStore.getState()));
      expect(providedProps.values).toEqual(getFormValues('syncValidation')(testStore.getState()).toJS());
    });
  });
});
