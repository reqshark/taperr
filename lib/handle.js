/**
 * handler emits an error event, ideal for flat spot named callbacks
 */
module.exports = function(err){
  require('./global').emit('error', err);
}
