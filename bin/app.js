var
  path    = require('path'),
  Module  = require('module'),
  load    = Module._load;

Module._load = function(module) {
  if (module === 'appjs') {
    return require('../lib');
  } else {
    return load.apply(Module, arguments);
  }
}

require(path.resolve(__dirname + '/' + process.argv[2]));