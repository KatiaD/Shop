import { Map, fromJS } from 'immutable';

import getQuantity from './getQuantity';


describe('Given getQuantity selector', () => {
  const currentStoreState = fromJS({
    quantity: { 1: 5, 5: 3 },
  });

  describe('when the selector is called', () => {
    let result;
    beforeEach(() => {
      result = getQuantity(currentStoreState);
    });
    describe('and quantity is in the store', () => {
      it('should return quantity of products from the store', () => {
        expect(result).toEqual(Map({ 1: 5, 5: 3 }));
      });
    });
  });
});
