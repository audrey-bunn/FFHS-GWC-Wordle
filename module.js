//Backend Helper Module - creates word list from .txt file
module.exports = {
  generateWordList: function() {
  var fs = require('fs');
  var array = fs.readFileSync('words.txt').toString().replaceAll('\n', ',');
  return array;
},
}