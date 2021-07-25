export function LSDSort(arr: string[], singleItemLength: number) {
  if (arr.some((item) => item.length !== singleItemLength)) {
    throw new Error("All Strings' length must be the same.");
  }
  // ASCII码总数
  const ASCIILength = 255 + 1;
  const CountMAP = new Map<number, number>();
  const indexArr = new Array(ASCIILength + 1).fill(0);
  const temp = [];
  // digit 位数
  // singleItemLength 总位数
  for (let digit = singleItemLength - 1; digit >= 0; digit--) {
    // 清空计数
    CountMAP.clear();
    // 字符计数开始
    for (const currStr of arr) {
      // 获取当前位数的ASCIICode
      const currCharCode = currStr.charCodeAt(digit);
      // 计数
      CountMAP.set(currCharCode, (CountMAP.get(currCharCode) || 0) + 1);
    }
    for (let ascii = 0; ascii < ASCIILength; ascii++) {
      indexArr[ascii + 1] = indexArr[ascii] + (CountMAP.get(ascii) || 0);
    }
    for (const currStr of arr) {
      const currCharCode = currStr.charCodeAt(digit);
      temp[indexArr[currCharCode]] = currStr;
      indexArr[currCharCode]++;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = temp[i];
    }
  }
  return arr;
}
