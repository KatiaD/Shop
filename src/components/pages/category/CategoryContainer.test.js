import React from 'react';
import { initialStoreState } from 'store';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { MemoryRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import {
  getProducts,
  getCartProducts,
} from 'selectors';
import { handlers, enhance } from './CategoryContainer';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const id = 2;

const testProps = {
  dispatchAddToCart: jest.fn(),
  dispatchFetchProducts: jest.fn(),
};

describe('Given a CategoryContainer enhancer', () => {
  describe('when the handleAddToCart is called', () => {
    beforeEach(() => {
      handlers.handleAddToCart(testProps)(id);
    });

    describe('and the action is "ADD_TO_CART"', () => {
      it('should call the addToCart with id', () => {
        expect(testProps.dispatchAddToCart).toHaveBeenCalledWith(id);
      });
    });
  });

  describe('when the dispatchFetchProducts is called', () => {
    beforeEach(() => {
      handlers.handleFetchProducts(testProps)();
    });

    describe('and the action is "FETCH_PRODUCTS"', () => {
      it('should call the fetchProducts', () => {
        expect(testProps.dispatchFetchProducts).toHaveBeenCalled();
      });
    });
  });
  describe('when the enhancer is rendered', () => {
    let providedProps;

    beforeEach(() => {
      const CategoryContainer = enhance(createSink(props => (providedProps = props)));
      mount(
        <MemoryRouter>
          <Provider store={testStore}>
            <CategoryContainer {...testProps} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.dispatchAddToCart).toBeInstanceOf(Function);
      expect(providedProps.dispatchFetchProducts).toBeInstanceOf(Function);
      expect(providedProps.myProducts).toEqual(getProducts(testStore.getState()).toJS());
      expect(providedProps.total).toEqual(getCartProducts(testStore.getState()).toJS());
    });
  });
});
