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

const reverse = s => {
  if (s.length <= 1) return s;
  return s[s.length - 1] + reverse(s.slice(0, -1));
};

const isPalindrome = s => {
  s = s.toLowerCase();
  if (s.length === 1) return true;
  if (s.length === 2) return s[0] === s[1];
  if (s[0] === s[s.length - 1]) return isPalindrome(s.slice(1, -1));
  return false;
};
