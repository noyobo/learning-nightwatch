module.exports = {
  load: function () {
    return this.client
      .url('http://s.taobao.com')
      .waitForElementVisible('body', 1000)
      .assert.title('淘宝搜索');
  },

  search: function (query) {
    return this.client
      .assert.visible('input[name=q]')
      .setValue('input[name=q]', query)
      .waitForElementVisible('.btn-search', 1000)
      .click('.btn-search')
      .pause(1000);
  }
};

