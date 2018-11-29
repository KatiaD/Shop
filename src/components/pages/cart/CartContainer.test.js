import React from 'react';
import { initialStoreState } from 'store';
import configureStore from 'redux-mock-store';
import { createSink } from 'recompose';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import {
    getCartProducts,
    getTotal,
    getQuantity,
    getUser,
} from 'selectors';

import { enhance, handlers } from './CartContainer';

const testStore = configureStore([thunkMiddleware])(initialStoreState);

const id = 1;

const testProps = {
    handleSetUser: jest.fn(),
    dispatchAddUser: jest.fn(),
    dispatchPlusItem: jest.fn(),
    dispatchMinusItem: jest.fn(),
};

describe('Given a CartContainer enhancer', () => {

    describe('when the handlePlusItem is called', () => {

        beforeEach(() => {
            handlers.handlePlusItem(testProps)(id);
        });

        describe('and the action is "PLUS_ITEM"', () => {
            it('should call the plusItem with id', () => {
                expect(testProps.dispatchPlusItem).toHaveBeenCalledWith(id);
            });
        });
    });

    describe('when the handleMinusItem is called', () => {

        beforeEach(() => {
            handlers.handleMinusItem(testProps)(id);
        });

        describe('and the action is "MINUS_ITEM"', () => {
            it('should call the minusItem with id', () => {
                expect(testProps.dispatchMinusItem).toHaveBeenCalledWith(id);
            });
        });
    });
    describe('when the enhancer is rendered', () => {
        let providedProps;

        beforeEach(() => {
            const CartContainer = enhance(createSink(props => (providedProps = props)));

            mount(
                <MemoryRouter>
                    <Provider store={testStore}>
                        <CartContainer {...testProps} />
                    </Provider>
                </MemoryRouter>,
            );
        });

        it('should provide the required props', () => {
            expect(providedProps.handleSetUser).toBeInstanceOf(Function);
            expect(providedProps.dispatchAddUser).toBeInstanceOf(Function);
            expect(providedProps.dispatchPlusItem).toBeInstanceOf(Function);
            expect(providedProps.dispatchMinusItem).toBeInstanceOf(Function);

            expect(providedProps.myProducts).toEqual(getCartProducts(testStore.getState()).toJS());
            expect(providedProps.total).toEqual(getTotal(testStore.getState()));
            expect(providedProps.quantity).toEqual(getQuantity(testStore.getState()).toJS());
            expect(providedProps.user).toEqual(getUser(testStore.getState()));
        });
    });
});
