let ind, ar, arr, strArr;

function removeDouble(arr, str) {
  ind = arr.indexOf(str);
  while (ind !== -1) {
    arr.splice(ind, 1);
    ind = arr.indexOf(str, ind + 1);
  }
}

function firstClean(words) {
  ar = words.trim().split(' ');
  while ((ind = ar.indexOf('')) !== -1)
    ar.splice(ind, 1);
  const uniqueSet = new Set(ar);
  return [...uniqueSet];
}

function addWords(obj, str) {
  arr = firstClean(obj.words);
  strArr = firstClean(str);

  for (let i in strArr) {
    ind = arr.indexOf(strArr[i]);
    if (ind === -1)
      arr.push(strArr[i].trim());
  }
  obj.words = arr.join(' ');
}

function removeWords(obj, str) {
  arr = firstClean(obj.words);
  strArr = firstClean(str);
  for (let i in strArr) {
    removeDouble(arr, strArr[i]);
  }
  obj.words = arr.join(' ');
}

function changeWords(obj, str1, str2) {
  removeWords(obj, str1);
  addWords(obj, str2);
}

const obj = {
  words: 'newspapers newspapers books magazines'
};
console.log(obj); // {words: "newspapers newspapers books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}