const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return arr.indexOf(arr[i]);
  }
  return -1;
};
