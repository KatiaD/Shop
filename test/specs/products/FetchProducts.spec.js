import Redux from 'page-objects/Redux';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Redux.open();
  });

  describe('when the FetchProducts button is clicked', () => {
    beforeEach(() => {
      browser.pause(1000);
      Redux.buttonFetchProducts.click();
    });

    it('should load products from backend', () => {
      browser.pause(2000);
      expect(Redux.findProduct('Item 1').getText()).toMatch('Item 1 - ');
      expect(Redux.findProduct('Item 2').getText()).toMatch('Item 2 - ');
      expect(Redux.findProduct('Item 3').getText()).toMatch('Item 3 - ');
      expect(Redux.findProduct('Item 4').getText()).toMatch('Item 4 - ');
    });
  });
});
