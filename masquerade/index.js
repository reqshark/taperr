/**
 * module.exports masquerade madness..
 * the extra complexity is BS, dump the masquerade
 */

var evt = require('./global');
module.exports  = {
  evterr        :       evt.evterr,
  err           :       require('./handle')
}
