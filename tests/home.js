var path = require('path');
var should = require('should');

module.exports = {
  tags: ['sanity'],

  'Load s.taobao.com': function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    client
      .page.browser.open({
        q: '女装'
      })
      .page.mouse.enter('.location.J_LaterHover')
      .assert.cssClassPresent(".location.J_LaterHover", "location-hover", '鼠标经过样式变更')
      .assert.cssClassPresent(".location.J_LaterHover", "icon-tag", '子类图标样式变更')
      .assert.visible('.m-sortbar .location .sections', '发货地面板展开')
      .page.mouse.leave('.location.J_LaterHover')
      .end();
  }
};
