function param(obj) {
  if (!obj) {
    return '/'
  }
  var result = []
  for (var i in obj) {
    result.push(i + '=' + obj[i])
  }
  return '/search?' + result.join('&')
}

module.exports = {
  open: function(data) {
    var search = param(data);
    var url = 'http://s.taobao.com' + search;
    console.log(url);
    return this.client
      .url(url)
      .waitForElementVisible('#srp-footer', 1000)
  },

  search: function(query) {
    return this.client
      .assert
      .visible('input[name=q]')
      .setValue('input[name=q]', query)
      .click('.btn-search')
      .pause(1000);
  }
};
