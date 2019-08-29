const binarySearch = (arr, val) => {
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === val) return mid;
    else if (val < arr[mid]) end = mid - 1;
    else if (val > arr[mid]) start = mid + 1;
  }
  return -1;
};
