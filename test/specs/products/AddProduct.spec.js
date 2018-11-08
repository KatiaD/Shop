import Redux from 'page-objects/Redux';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Redux.open();
  });

  describe('when a product name is entered', () => {
    beforeEach(() => {
      Redux.inputNewProductName.setValue('New Product');
    });

    describe('and the Add Product button is pressed', () => {
      beforeEach(() => {
        Redux.buttonAddProduct.click();
      });

      it('should add the product to the list', () => {
        browser.pause(2000);
        expect(Redux.findProduct('New Product').getText()).toMatch('New Product - ');
      });
    });
  });
});
