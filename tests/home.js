var path = require('path');

module.exports = {
  tags: ['sanity'],

  'Load s.taobao.com': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    client.page.homepage.load().end();
  }
};
