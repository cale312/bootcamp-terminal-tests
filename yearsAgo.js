module.exports = function (year) {
  var today = new Date();
  var isYear = today.getFullYear();
  var y = isYear - year;
  console.log(today.getFullYear());
  console.log(isYear);
  return y
}