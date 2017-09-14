// 密码验证：至少8位，只能包含且至少包含两种（1，数字 2，大写字母 3，小写字母），首位不能是数字

const testUpper = str => /[A-Z]/.test(str);
const testLower = str => /[a-z]/.test(str);
const testLength = str => str.length >= 8;
const testNum = str => /[0-9]/.test(str);
const testFormat = str => /^[a-zA-Z][a-zA-Z0-9]{1,}$/.test(str);

const main = code => {
  const fulfill = Number(testUpper(code)) + Number(testLower(code)) + Number(testNum(code));
  if (fulfill >= 2 && testLength(code) && testFormat(code)) {
    return 'YES';
  }
  return 'NO';
}

export default main;
