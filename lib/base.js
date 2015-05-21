/**
 * taperr base class inherits from EventEmitter
 */
module.exports = er;
require('utildot').inherits(er, require('events').EventEmitter);
function er(){
  require('events').EventEmitter.call(this);
}
