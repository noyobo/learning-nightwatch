var path = require('path');
var should = require('should');

module.exports = {
  tags: ['tmall'],

  '天猫宝贝': function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    client
      .page.browser.open({
        q: '女装',
        seller_type: 'tmall'
      })
      .all('#mainsrp-itemlist .item .icon-service-tianmao', function (result) {
        this.assert.equal(result.value.length, 48, '天猫ICON 全透出');
      })
      .end();
  }
};
