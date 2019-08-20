const power = (n, p) => {
  if (p === 0) return 1;
  return n * power(p - 1);
};

const factorial = n => {
  if (n <= 1 || n < 0) return 1;
  return n * factorial(n - 1);
};

const productOfArray = arr => {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

const recursiveRange = n => {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
};

const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
};
