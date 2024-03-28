//Problem Statement: Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const counting = (s) => {
  let freq = {};

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) freq[s[i]] += 1;
    else freq[s[i]] = 1;
  }
  //console.log(freq);
  let s1 = "";
  for (i in freq) {
    s1 = s1 + i + freq[i];
  }
  return s1;
};

console.log(counting("abcabcdabbcc"));
