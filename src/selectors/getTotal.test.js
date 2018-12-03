import { fromJS } from 'immutable';

import getTotal from './getTotal';

describe('Given getCartProducts selector', () => {
  const currentStoreState = fromJS({
    products: [
      { id: 1, name: 'GUNMETAL SANDSTONE', price: 140 },
      { id: 2, name: 'HUSTLE', price: 139 },
    ],
    cart: [1, 2],
    quantity: { 1: 1, 2: 1 },
  });
  describe('when the getTotal selector is called', () => {
    let result;

    beforeEach(() => {
      result = getTotal(currentStoreState);
    });

    describe('and the cart products are in the store', () => {
      it('should return total price of products from the store', () => {
        expect(result).toBe(279);
      });
    });
  });
});
