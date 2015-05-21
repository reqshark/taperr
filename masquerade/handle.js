/**
 * taperr handler emits an error event, ideal for flat spot named callbacks
 */

var evterr = require('./global').evterr
module.exports = function(err){
  evterr.emit('error', err);
}
