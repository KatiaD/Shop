class Cart {
  static get findButtonPlus() {
    const links = $$('button[data-name="plus"]');
    return links;
  }

  static findQuantity(name) {
    return browser.element(`tr[data-name="${name}"]`);
  }
}

export default Cart;
