/**
 * inherit from EventEmitter
 */

module.exports = er;

require('utildot').inherits(er, require('events').EventEmitter);

function er(){
  this.errs = {};
  require('events').EventEmitter.call(this);
}
