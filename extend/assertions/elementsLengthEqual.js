var util = require('util');

exports.assertion = function(elem1, elem2, msg) {

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = msg || util.format('Testing that elements length equals "%s" , "%s".', elem1, elem2);

  /**
   * A value to perform the assertion on. If a function is
   * defined, its result will be used.
   * @type {function|*}
   */
  this.expected = 'present';
  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function(value) {
    return value[0].length === value[0].length;
  };

  /**
   * The method which returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   * @type {function}
   */
  this.value = function(result) {
    return result;
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function(callback) {
    var elements = []
    this.api.elements('css selector', elem1, function(result) {
      elements.push(result.value)
    })
    this.api.elements('css selector', elem2, function(result){
      elements.push(result.value)
      callback(elements)
    })

    return this;
  };
};
// function(result) {
//   var passed, value;

//   if (typeof self.failure == 'function' && self.failure(result)) {
//     passed = false;
//     value = null;
//   } else {
//     value = self.value(result);
//     passed = self.pass(value);
//   }

//   var timeSpent = new Date().getTime() - self.startTime;
//   if (!passed && timeSpent < self.timeout) {
//     return self._reschedule();
//   }

//   var expected = typeof self.expected == 'function' ? self.expected() : self.expected;
//   var message = self._getFullMessage(passed, timeSpent);

//   self.client.assertion(passed, value, expected, message, self.abortOnFailure);
//   self.emit('complete');
// }

