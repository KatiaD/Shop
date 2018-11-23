import React from 'react';
import { initialStoreState } from 'store';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { getProducts, getCartProducts } from 'selectors';
import { handlers, enhance } from './CategoryContainer';
 
const testStore = configureStore()(initialStoreState); 

const id = 2;

const testProps = {
    dispatchAddToCart: jest.fn(),
    dispatchFetchProducts: jest.fn(),
};

 describe('Given a CategoryContainer handlers', () => {
	describe('when the handleFetchProducts is called', () => {
 		beforeEach(() => {
			handlers.handleFetchProducts(testProps)();
		});
 		it('should call the dispatchFetchProducts function', () => {
			expect(testProps.dispatchFetchProducts).toHaveBeenCalled();
		});
	});
 	describe('when the  handleAddToCart is called', () => {
		beforeEach(() => {
			handlers.handleAddToCart(testProps)(id);
		});
 		it('should call the dispatchAddToCart function', () => {
			expect(testProps.dispatchAddToCart).toHaveBeenCalledWith(id);
		});
  });
});
 describe('Given a CategoryContainer enhancer', () => {
	describe('when the enhancer is rendered', () => {
		let providedProps;
 		beforeEach(() => {
			const DummyContainer = enhance(createSink(props => (providedProps = props)));
 			mount(
				<Provider store={ testStore }>
					<DummyContainer />
				</Provider>
			);
		});
}); 
 });