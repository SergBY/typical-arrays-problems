
exports.min = function min (array) {
  if (array == undefined || array == 0)
	 {
	 	return 0;
	 }
  return Math.min(...array);
}

exports.max = function max (array) {
  if (array == undefined || array == 0)
	 {
	 	return 0;
	 }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array == undefined || array == 0)
  {
    return 0;
  }
  else {
    let n = 0;
    for (let i = 0; i < array.length; i++) {
      n += array[i];
    } return n/array.length;
  } 
}
