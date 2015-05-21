/**
 * cache er's (EventEmitter) child constructor call once so it's global
 */

var er = require('./er');
module.exports = {
  evterr: new er()
}
