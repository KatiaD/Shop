import {
  Map,
  fromJS,
  List,
} from 'immutable';

import getProducts from './getProducts';

describe('Given getProducts selector', () => {
  const currentStoreState = fromJS({
    products: [
      { id: 1, name: 'GUNMETAL SANDSTONE', price: '140' },
      { id: 2, name: 'HUSTLE', price: '139' },
      { id: 3, name: 'BLACK LINK', price: '110' }],
  });
  describe('when the selector getProducts is called', () => {
    let result;
    beforeEach(() => {
      result = getProducts(currentStoreState);
    });
    describe('and products are in the store', () => {
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
