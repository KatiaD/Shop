import addUser from './addUser';

describe('Given the addUser action', () => {
  let action;

  describe('when the action is called', () => {
    let user;

    beforeEach(() => {
      action = addUser(user);
    });

    it('should have the ADD_USER type', () => {
      expect(action.type).toBe('ADD_USER');
    });

    describe('and a name, address of user are provided', () => {
      beforeAll(() => {
        user = {
          name: 'Kate',
          address: 'Kiev',
        };
      });
      it('should create a payload equal to the provided value', () => {
        expect(action.payload.name).toBe('Kate');
        expect(action.payload.address).toBe('Kiev');
      });
    });
  });
});
