function fiboEvenSum(n) {
  let fibArray = buildFibArray(n);
  let sum = 0;
  fibArray.forEach(function(n) {
    if (n % 2 === 0) {
      sum += n;
    }
  });
  return sum;
}

function buildFibArray(n) {
  let arr = [1, 2];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
