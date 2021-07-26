const ASCIILength = 256;
export function MSDSort(arr: string[]) {
  _MSDSort(arr, 0, arr.length - 1, 0);
  return arr;
}
function _MSDSort(arr: string[], left: number, right: number, r: number) {
  if (left >= right) {
    return;
  }
  const CountMAP = new Map<number, number>();
  const indexArr = new Array(ASCIILength + 1).fill(0);
  const temp: string[] = [];
  function getCurrCharCodeByIndex(idx: number) {
    const currStr = arr[idx];
    return r >= currStr.length ? 0 : arr[idx].charCodeAt(r) + 1;
  }
  for (let i = left; i <= right; i++) {
    const currCharCode = getCurrCharCodeByIndex(i);
    CountMAP.set(currCharCode, (CountMAP.get(currCharCode) || 0) + 1);
  }
  for (let ascii = 0; ascii < ASCIILength + 1; ascii++) {
    indexArr[ascii + 1] = indexArr[ascii] + (CountMAP.get(ascii) || 0);
  }
  for (let i = left; i <= right; i++) {
    const currCharCode = getCurrCharCodeByIndex(i);
    temp[indexArr[currCharCode]] = arr[i];
    indexArr[currCharCode]++;
  }
  for (let i = left; i <= right; i++) {
    arr[i] = temp[i - left];
  }
  for (let i = 0; i < ASCIILength; i++) {
    _MSDSort(arr, left + indexArr[i], left + indexArr[i + 1] - 1, r + 1);
  }
}
