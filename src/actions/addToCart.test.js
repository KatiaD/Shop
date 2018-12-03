import addToCart from './addToCart';

describe('Given the addToCart action', () => {
  let action;

  describe('when the action is called', () => {
    let id;

    beforeEach(() => {
      action = addToCart(id);
    });

    it('should have the ADD_TO_CART type', () => {
      expect(action.type).toBe('ADD_TO_CART');
    });

    describe('and id of a product is provided', () => {
      beforeAll(() => {
        id = 1;
      });

      it('should create a payload with the provided product id', () => {
        expect(action.payload.id).toBe(1);
      });
    });
  });
});
