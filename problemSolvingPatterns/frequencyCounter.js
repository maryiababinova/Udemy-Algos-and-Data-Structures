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

function sameFrequency(n1, n2) {
  n1 = n1.toString();
  n2 = n2.toString();
  if (n1.length !== n2.length) return false;

  let hash1 = {},
    hash2 = {};

  for (let i = 0; i < n1.length; i++) {
    hash1[n1[i]] = (hash1[n1[i]] || 0) + 1;
  }

  for (let i = 0; i < n2.length; i++) {
    hash2[n2[i]] = (hash2[n2[i]] || 0) + 1;
  }

  for (let key in hash1) {
    if (!(key in hash2)) return false;
    else if (hash1[key] !== hash2[key]) return false;
  }

  return true;
}

function areThereDuplicates(arguments) {
  let args = [...arguments]
  let hash = {};
  for (let i = 0; i < args.length; i++){
      hash[args[i]] = (hash[args[i]] || 0) + 1;
  }
  for (let key in hash){
      if(hash[key] > 1) return true;
  }
  return false;
}
