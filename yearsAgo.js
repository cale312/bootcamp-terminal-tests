module.exports = function (year) {
  var today = new Date();
  var isYear = today.getFullYear();
  var y = isYear - year;
  return y
}