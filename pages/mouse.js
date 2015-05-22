module.exports = {
  enter: function(elem) {
    var x = y = 1;
    return this.client
      .moveToElement(elem, x, y)
  },
  leave: function(elem) {
    var x = y = 1;
    return this.client
      .moveToElement(elem, x, y)
  }
};
