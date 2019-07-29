function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = 0;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}
