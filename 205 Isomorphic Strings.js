// https://leetcode.com/problems/isomorphic-strings/

const isIsomorphic = (s, t) => {
  const { length } = s;
  const o = {};
  for (let i = 0; i < length; i++) {
    o[i] = s[i];
  }
  console.log(o);
  for (let i = 0; i < length; i++) {
    const char = t[i];
    console.log(char);
    const key = o[i];
    console.log(key);
    // check for the domain of the new char
    const charDomain = o["dm" + char];
    const keyAti = o["key" + o[i]];
    if (!charDomain) {
      if (keyAti) {
        return false;
      }
      o["dm" + char] = o[i];
      o["key" + o[i]] = char;
      continue;
    }
    if (charDomain !== o[i]) {
      return false;
    }
  }
  return true;
};

const isIsomorphic_Better = (s, t) => {
  objs = {};
  objt = {};
  for (let i = 0; i < s.length; i++) {
    if (objs[s[i]] !== objt[t[i]]) {
      // console.table(objs,objt);
      return false;
    }
    objs[s[i]] = i;
    objt[t[i]] = i;
  }
  return true;
};

// console.log(isIsomorphic("egg","add"));
// console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic_Better("badc", "baba"));
