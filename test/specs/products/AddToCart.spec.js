import Category from 'page-objects/Category';

describe('Given the Category page is opened', () => {
  beforeEach(() => {
    Category.open();
  });
  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Category.findButtonAddToCart.forEach((link) => {
        link.click();
      });
    });
    it('should add the product to the cart list', () => {
      expect(Category.findImageCart().getText()).toMatch('16');
    });
  });
});
