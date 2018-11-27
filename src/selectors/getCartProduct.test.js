import {
  Map,
  fromJS,
  List
} from 'immutable';

import getCartProducts from './getCartProducts';

describe('Given getCartProducts selector', () => {
  const currentStoreState = fromJS({
    products: [
      { id: 1, name: 'GUNMETAL SANDSTONE', price: '140' },
      { id: 2, name: 'HUSTLE', price: '139' },
      { id: 3, name: 'BLACK LINK', price: '110' }],
    cart: [1, 2, 3],
  });
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getCartProducts(currentStoreState);
    });

    describe('and cart products are in the store', () => {
      it('should return products from the store', () => {
        expect(result).toEqual(List([
          Map({ id: 1, name: 'GUNMETAL SANDSTONE', price: '140' }),
          Map({ id: 2, name: 'HUSTLE', price: '139' }),
          Map({ id: 3, name: 'BLACK LINK', price: '110' }),
        ]));
      });
    });
  });
});