var path = require('path');

module.exports = {
  tags: ['sanity', 'search'],

  'taobao search from homepage': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    var searchTerm = '女装';

    client
      .page.homepage.load()
      .page.homepage.search(searchTerm)
      .page.search_results.assertResults(searchTerm)
      .page.search_results.navImages()
      .saveScreenshot('./results/screenshots/screen2.png')
      .end();
  }
};
