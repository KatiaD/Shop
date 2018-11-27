import { Map, fromJS } from 'immutable';

import getUser from './getUser';

describe('Given getCartProducts selector', () => {
    const currentStoreState = fromJS({
        user: {
            name: '',
            address: ''
        },
    });
    describe('when the getUserInfo selector is called', () => {
        let result;

        beforeEach(() => {
            result = getUser(currentStoreState);
        });
        describe('and the cart products are in the store', () => {
            it('should return userInfo from the store', () => {
                expect(result).toEqual(Map({
                    name: '',
                    address: ''
                }));
            });
        });
    });
});