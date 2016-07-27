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
}

module.exports = function(source) {
  var dirname = path.join(__dirname, '..');
  var files = scanDir(path.join(dirname, 'examples'));
  var file;

  source = 'let data = {};\n';
  for (var i = 0, len = files.length; i < len; ++i) {
    file = files[i];
    var filename = file.file.replace(dirname, '').replace(/\.js$/, '');
    var key = filename.replace(/[\/\-]/g, '_');
    source += 'import ' + key + ' from \'..' + filename + '\';\n';
    source += 'data[\'' + filename + '\'] = ' + key + ';\n';
  }

  source += 'export default data;';

  return source;
};
