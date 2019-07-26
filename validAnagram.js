function validAnagram(str1, str2) {
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < str1.length; i++)
    hash1[str1[i]] = (hash1[str1[i]] || 0) + 1;

  for (let i = 0; i < str2.length; i++)
    hash2[str2[i]] = (hash2[str2[i]] || 0) + 1;

  for (let key in hash1) {
    if (!(key in hash2)) return false;
    if (hash1[key] !== hash2[key]) return false;
  }
  return true;
}
