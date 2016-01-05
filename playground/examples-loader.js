var fs = require('fs');
var path = require('path');

function scanDir(dir) {
  var files = fs.readdirSync(dir);
  var filepath;
  var subFiles;
  var returnValue = [];
  for (var i = 0, len = files.length; i < len; ++i) {
    if (files[i].charAt(0) !== '.') {
      filepath = path.resolve(path.join(dir, files[i]));
      if (fs.lstatSync(filepath).isDirectory()) {
        subFiles = scanDir(path.join(dir, files[i]));
        returnValue.push.apply(returnValue, subFiles);
      } else {
        returnValue.push({
          file: path.join(dir, files[i]),
          filepath: filepath
        });
      }
    }
  }
  return returnValue;
};

module.exports = function(source) {
  var dirname = path.join(__dirname, '..');
  var files = scanDir(path.join(dirname, 'examples'));
  var file;
  var data;

  source = 'var data = {};\n';
  for (var i = 0, len = files.length; i < len; ++i) {
    file = files[i];
    var filename = file.file.replace(dirname, '').replace(/\.js$/, '');
    data = 'data[\'' + filename + '\'] = require(\'..' + filename + '\');\n';
    source = source + data;
  }
  source = source + '\nmodule.exports = data;\n';

  return source;
};
