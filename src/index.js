exports.min = function min (array) {
  if (array == 0 || array == null) {
    return 0;
  }
  return Math.min.apply(Math, array);
}

exports.max = function max (array) {
  if (array == 0 || array == null) {
    return 0;
  }
    return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  if (array == 0 || array == null) {
    return 0;
  }
  var result = 0;
for(var i = 0; i < array.length; i++) {
    result += array[i];
}
var avg = result / array.length;
return avg;
}