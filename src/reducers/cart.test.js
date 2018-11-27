import cart, { initialCartState } from './cart';

describe('Given the  reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: {},
    };

    let newState;

    beforeEach(() => {
      newState = cart(initialCartState, testAction);
    });

    describe('and the MINUS_ITEM action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'MINUS_ITEM';
        testAction.payload = { id: 1 };
      });
      it('should return the current state', () => {
        expect(newState).toEqual(initialCartState.push());
      });
    });

    describe('and the MINUS_ITEM payload is added to the provided cart', () => {
      beforeEach(() => {
        newState = cart(initialCartState, testAction);
      });
      beforeAll(() => {
        testAction.type = 'MINUS_ITEM';
        testAction.payload = { id: 1 };
      });
      
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialCartState);
      });
    });
  });
});