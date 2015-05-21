# taperr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![npmbadge](https://nodei.co/npm/taperr.png?mini=true)](https://www.npmjs.com/package/taperr)
fire once. tape error events for [`t.fail(msg)`](https://github.com/substack/tape#tfailmsg)

### t.fail(*msg*)
* tape's deliberate failure mechanism uses a normal style data message signature
* you can fit `t.fail` flat into an EventEmitter's callback spot
* looks nicer this way IMO and helps organize intentional errors triggered in tests
* to find and report uncaught errors, you're probably looking for [tape-catch](https://github.com/michaelrhodes/tape-catch)

### basic idea:
```js
require('taperr').once( 'error', t.fail )
```

### install:
```bash
$ npm i taperr
```

### test:
```bash
$ npm t
```
