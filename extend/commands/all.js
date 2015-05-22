

module.exports.command = function(selector, callback) {
  var execcallback, execute, params;
  params = [selector];

  execute = function(selector) {
    return document.querySelectorAll(selector);
  };
  execcallback = (function(_this) {
    return function(result) {
      if (callback) {
        return callback.call(_this, result);
      }
    };
  })(this);
  return this.execute(execute, params, execcallback);
};
