var path = require('path');
var should = require('should');


var iconLength

module.exports = {
  tags: ['tmall'],

  before: function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
    this.userData = {};
    client
      .page.browser.open({
        q: '女装',
        seller_type: 'tmall'
      })
  },

  '天猫宝贝': function(client) {
    client
      .assert.elementsLengthEqual(
        '#mainsrp-itemlist .item .icon-service-tianmao',
        '#mainsrp-itemlist .item'
      )
      .saveScreenshot('./results/tmall/icon.png')
      .end();
  }
};
