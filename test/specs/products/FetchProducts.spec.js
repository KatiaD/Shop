import Category from 'page-objects/Category';

describe('Given the Category page is opened', () => {
  beforeEach(() => {
    Category.open();
  });

  describe('when the Category page is loaded', () => {
    it('should load products from mockServerData', () => {
      expect(Category.findProduct('GUNMETAL SANDSTONE').getText()).toMatch('GUNMETAL SANDSTONE');
      expect(Category.findProduct('HUSTLE').getText()).toMatch('HUSTLE');
      expect(Category.findProduct('BLACK LINK').getText()).toMatch('BLACK LINK');
      expect(Category.findProduct('GHOST').getText()).toMatch('GHOST');
      expect(Category.findProduct('BLACK TAN').getText()).toMatch('BLACK TAN');
      expect(Category.findProduct('OPAR').getText()).toMatch('OPAR');
      expect(Category.findProduct('DESERT').getText()).toMatch('DESERT');
      expect(Category.findProduct('ROSE GOLD').getText()).toMatch('ROSE GOLD');
      expect(Category.findProduct('ROSE GOLD BROWN').getText()).toMatch('ROSE GOLD BROWN');
      expect(Category.findProduct('VOYAGER MONOCHROME').getText()).toMatch('VOYAGER MONOCHROME');
      expect(Category.findProduct('HUSTLE').getText()).toMatch('HUSTLE');
      expect(Category.findProduct('SLATE BLACK ROSE').getText()).toMatch('SLATE BLACK ROSE');
      expect(Category.findProduct('REVOLVER NUDE').getText()).toMatch('REVOLVER NUDE');
      expect(Category.findProduct('BOURBON ROSE').getText()).toMatch('BOURBON ROSE');
      expect(Category.findProduct('BRISTOL').getText()).toMatch('BRISTOL');
      expect(Category.findProduct('OATH').getText()).toMatch('OATH');
    });
  });
});
