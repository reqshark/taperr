# taperr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![npmbadge](https://nodei.co/npm/taperr.png?mini=true)](https://www.npmjs.com/package/taperr)
fire once. tape error events for [`t.fail(msg)`](https://github.com/substack/tape#tfailmsg)

### t.fail(*msg*)
* tape's deliberate failure mechanism uses a normal style data message signature
* you can fit `t.fail` flat into an EventEmitter's callback spot
* organize intentional error handlers triggered in tests.
* clean up unconscionable promise APIs:
  - normalize handlers given as the second error callback to `.then()` scenarios.
* to find and report uncaught errors, you're probably looking for [tape-catch](https://github.com/michaelrhodes/tape-catch)

### install:
```bash
$ npm i taperr
```

### basic idea:
```js
require('taperr').once( 'error', t.fail )

//call `.err(er){ }` to raise 'error' events
require('taperr').err

//the implicit parameter gets passed to t.fail( err ), lighting up a tape console
```

### example:
```js
require('tape')('headless osx chromedriver', function (t) {
  t.test('selenium-webdriver basic api interoperability', function (t) {

    t.plan(2);

    var webdriver = require('selenium-webdriver')
    var driver = new webdriver.Builder()
      .usingServer('http://127.0.0.1:4444/wd/hub')
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    require('taperr').once( 'error', t.fail );

    t.ok( driver.get('https://endpoint.what'), 'loaded endpoint' );

    driver.findElement( webdriver.By.id( 'username' ) ).then(function (el) {
      t.ok( el.sendKeys('selenium'), 'username: selenium' );
    }, require('taperr').err );

    driver.quit().then(function(){
      process.exit(0);
    }, require('taperr').err );
  });
});
```


### test:
```bash
$ npm t
```
