module.exports = function(args, stub) {
  args = [].slice.call(args);
  var modules = args[4];
  if(modules) {
    var collection = {};
    for(var i in modules) {
      var map = modules[i][1];
      for(var mName in map) {
        collection[mName] = map[mName];
      }
    }
    for(var s in stub) {
      if(collection[s]) {
        modules[collection[s]] = [(function(st) {
          return function(require, module, exports) {
            module.exports = st;
          };
        })(stub[s]), {}];
      }
    }
  } else {
    throw new Error('Missing modules\' collection');
  }
};