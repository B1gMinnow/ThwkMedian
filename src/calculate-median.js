function calculate_median(arr) {
  //请勿改动函数名
  var array = [];
  for(var i = 0; i < arr.length; i++)
  {
  	if(!((i % 2) === 0))
  		array.push(arr[i]);
  }

  array.sort(function(x,y){
  	return x-y;

  });

  if((array.length % 2) === 0)
  {
  	return (array[array.length/2] + array[array.length/2 - 1])/2;
  }
  else
  	return array[(array.length - 1)/2];
}


module.exports = calculate_median;
