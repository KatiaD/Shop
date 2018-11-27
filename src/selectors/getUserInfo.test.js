
import { Map, fromJS } from 'immutable';

import getUserInfo from './getUserInfo';

describe('Given getCartProducts selector', () => {
  const currentStoreState = fromJS({
    userInfo: { userId: '111111111' },
  });
  describe('when the getUserInfo selector is called', () => {
    let result;

    beforeEach(() => {
      result = getUserInfo(currentStoreState);
    });
    describe('and the cart products are in the store', () => {
      it('should return userInfo from the store', () => {
        expect(result).toEqual(Map({ userId: '111111111' }));
      });
    });
  });
});