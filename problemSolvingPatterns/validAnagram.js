function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let hash = {};

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = (hash[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!hash[str2[j]]) return false;
    else hash[str2[j]] -= 1;
  }
  return true;
}
