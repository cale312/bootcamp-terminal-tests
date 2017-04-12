module.exports = function (plate) {
    'use strict';
    var car = plate.split(',');
    var fromTown = [];
    for (var i = 0; i < car.length; i++) {
        if (car[i].startsWith('CL')) {
            fromTown.push(car[i]);
        }
    }
    return fromTown.length;
}