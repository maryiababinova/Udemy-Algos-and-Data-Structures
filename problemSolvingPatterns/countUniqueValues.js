function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}
