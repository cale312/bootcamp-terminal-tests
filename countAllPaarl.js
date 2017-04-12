module.exports = function (many) {
    'use strict';
  var isHowMany = many.split(', ');
  var isPaarl = [];
    for (var i = 0; i < isHowMany.length; i++) {
      if (isHowMany[i].startsWith('CJ')) {
        isPaarl.push(isHowMany[i]);
      }
  }
  return isPaarl.length;
}