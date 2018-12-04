import Category from 'page-objects/Category';
import Cart from 'page-objects/Cart';

describe('Given the Category page is opened', () => {
  beforeEach(() => {
    Category.open();
  });
  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Category.findButtonAddToCart.forEach((link) => {
        link.click();
      });
      Category.findImageCart().click();
    });

    describe('Given the cart page is opened', () => {
      describe('when plus button is clicked', () => {
        beforeEach(() => {
          Cart.findButtonPlus.forEach((link) => {
            link.click();
          });
        });
        it('should add quantity 2 to product in cart', () => {
          expect(Cart.findQuantity('1').getText()).toMatch('2');
          expect(Cart.findQuantity('2').getText()).toMatch('2');
          expect(Cart.findQuantity('3').getText()).toMatch('2');
          expect(Cart.findQuantity('4').getText()).toMatch('2');
          expect(Cart.findQuantity('5').getText()).toMatch('2');
          expect(Cart.findQuantity('6').getText()).toMatch('2');
          expect(Cart.findQuantity('7').getText()).toMatch('2');
          expect(Cart.findQuantity('8').getText()).toMatch('2');
          expect(Cart.findQuantity('9').getText()).toMatch('2');
          expect(Cart.findQuantity('10').getText()).toMatch('2');
          expect(Cart.findQuantity('11').getText()).toMatch('2');
          expect(Cart.findQuantity('12').getText()).toMatch('2');
          expect(Cart.findQuantity('13').getText()).toMatch('2');
          expect(Cart.findQuantity('14').getText()).toMatch('2');
          expect(Cart.findQuantity('15').getText()).toMatch('2');
          expect(Cart.findQuantity('16').getText()).toMatch('2');
        });
      });
    });
  });
});
