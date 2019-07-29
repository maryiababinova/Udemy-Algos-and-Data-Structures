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

function averagePair(arr, n) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let a = arr[i],
      b = arr[j];
    if ((a + b) / 2 === n) return true;
    else if ((a + b) / 2 > n) j--;
    else i++;
  }
  return false;
}
