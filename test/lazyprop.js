var lazyprop = require('lazyprop')
  , assert = require('assert')

exports['simple prop'] = function() {
  var obj = {}
  assert(typeof obj.answer === 'undefined', 'should not have the answer')

  var secret = 42
  lazyprop(obj, 'answer', function() { return secret++ })
  assert.equal(obj.answer, 42, 'the answer should be 42')
  assert.equal(obj.answer, 42, 'the answer should be 42, second')
  assert.equal(obj.answer, 42, 'the answer should be 42, third')
  assert.equal(secret, 43, 'the secret should be 43')
  assert(!obj.propertyIsEnumerable('answer'), 'should not be enumerable')
}

exports['custom prop descriptor'] = function() {
  var obj = {}
  assert(typeof obj.answer === 'undefined', 'should not have the answer')

  var secret = 42
  lazyprop(obj, 'answer', function() { return secret++ }, { enumerable: true })
  assert.equal(obj.answer, 42, 'the answer should be 42')
  assert.equal(obj.answer, 42, 'the answer should be 42, second')
  assert.equal(obj.answer, 42, 'the answer should be 42, third')
  assert.equal(secret, 43, 'the secret should be 43')
  assert(obj.propertyIsEnumerable('answer'), 'should be enumerable')
}
