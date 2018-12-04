class Category {
  static open() {
    browser.url('/');
  }

  static get findButtonAddToCart() {
    const links = $$('button');

    return links;
  }

  static findProduct(name) {
    return browser.element(`[data-name="${name}"]`);
  }

  static findImageCart() {
    return browser.element('[data-name="header-cart"]');
  }
}

export default Category;
