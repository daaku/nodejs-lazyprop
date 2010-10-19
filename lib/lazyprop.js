module.exports = function(obj, prop, get, descriptor) {
  descriptor = descriptor || {}
  descriptor.get = function() {
    var val = get()
    Object.defineProperty(obj, prop, { value: val })
    return val
  }
  descriptor.configurable = true
  Object.defineProperty(obj, prop, descriptor)
}
