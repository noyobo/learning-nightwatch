module.exports = {
  selectors: {
    'resultDiv': '#q',
    'navImages': '.m-itemlist .items .item a.pic-link'
  },

  assertResults: function (text) {
    return this.client.assert.attributeEquals(this.selectors.resultDiv, 'value', text);
  },

  navImages: function () {
    return this.client.click(this.selectors.navImages);
  }
};
