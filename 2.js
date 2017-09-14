const getMins = arr => {
  let min = arr[arr.length - 1];
  const pos = [];
  pos[arr.length - 1] = arr.length - 1;
  for (i = arr.length - 2; i >= 0; i--) {
    if (min > arr[i]) {
      min = arr[i];
      pos[i] = i;
    } else {;
      pos[i] = pos[i + 1];
    }
  }
  return pos;
};

const exchangeArr = (arr, i, j) => {
  const tmpArr = [];
  const n = arr.length;
  for (let idx = 0; idx < n; idx++) {
    if (idx === i) {
      tmpArr.push(arr[j]);
    } else if (idx === j) {
      tmpArr.push(arr[i]);
    } else {
      tmpArr.push(arr[idx]);
    }
  }
  return tmpArr;
};

const optimize = arr => {
  const minPos = getMins(arr);
  const n = arr.length;
  for (i = 0; i < n-1; i++) {
    if (minPos[i] > i) {
      return exchangeArr(arr, i, minPos[i]).join(' ');
    }
  }
  return arr.join(' ');
}

console.log(optimize([1,2,3,4,5,8,6]));
