module.exports = function check(str, bracketsConfig) {
  var arr = [];
  var existBracket = {};
  for (var i = 0; i < bracketsConfig.length; i++) {
    existBracket[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  arr.push(str.charAt(0));

  for (var j = 1; j < str.length; j++) {
    if (str.charAt(j) === existBracket[arr[arr.length - 1]]) {
      arr.pop();
    } else {
      arr.push(str.charAt(j));
    }
  }
  if (arr.length > 0) { return false; }
  return true;
};