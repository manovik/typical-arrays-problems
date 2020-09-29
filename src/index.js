
exports.min = function min (array) {
  if(array !== undefined && array.length !== 0){
    return Math.min(...array.map(i => i));
  }
  return 0;
}

exports.max = function max (array) {
  if(array !== undefined && array.length !== 0){
    return Math.max(...array.map(i => i));
  }
  return 0;
}

exports.avg = function avg (array) {
  if(array !== undefined && array.length !== 0){
    let sum = 0;
    for( let i of array){
      sum += i;
    };
    return sum / array.length;
  }
  return 0;
}