lazyprop [![Build Status](https://secure.travis-ci.org/nshah/nodejs-lazyprop.png)](http://travis-ci.org/nshah/nodejs-lazyprop)
========

Lazy properties for JavaScript. This allows for defining properties that are
lazily created using a given function upon first access. Subsequent access to
the property exposes the value created by the original function (the function
is only called once):

```javascript
var lazyprop = require('lazyprop')
var obj = {}
lazyprop(obj, 'answer', function() {
  console.log('only called once')
  return 42
})
var answer1 = obj.answer // will console.log
var answer2 = obj.answer // will NOT console.log
```
