class Category {
  static open() {
    browser.url('/');
  }

  static get buttonFetchProducts() {
    return browser.element('[data-name="fetch-products"]');
  }

  static get buttonAddProduct() {
    return browser.element('[data-name="add-product"]');
  }

  static get inputNewProductName() {
    return browser.element('[data-name="new-product-name"]');
  }

  static findProduct(name) {
    return browser.element(`[data-name="${name}"]`);
  }
}

export default Category;
