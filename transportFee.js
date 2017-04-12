module.exports = function(fee) {
  switch(fee) {
    case 'morning':
      return 'R20';
      break;
    case 'afternoon':
      return 'R10';
      break;
    case 'nightshift':
      return 'free';
      break;
    default:
      return 'You are not working today';
      break;
            }
}