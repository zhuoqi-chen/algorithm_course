/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/submissions/
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。
 * 示例 1:
 * 输入: [7,5,6,4]
 * 输出: 5
 */
export function reversePairs(numArr: number[]): number {
  let count = 0;
  const copyArr = new Array(numArr.length);
  function merge(arr: number[], l: number, mid: number, r: number) {
    for (let k = l; k <= r; k++) {
      copyArr[k] = arr[k];
    }
    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = copyArr[j];
        j++;
      } else if (j > r) {
        arr[k] = copyArr[i];
        i++;
      } else if (copyArr[i] > copyArr[j]) {
        const addCount = mid - i + 1;
        count += addCount;
        arr[k] = copyArr[j];
        j++;
      } else {
        arr[k] = copyArr[i];
        i++;
      }
    }
  }
  function sort(arr: number[], l: number, r: number) {
    if (l >= r) {
      return;
    }
    const mid = l + Math.floor((r - l) / 2);
    sort(arr, l, mid);
    sort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) {
      merge(arr, l, mid, r);
    }
  }
  sort(numArr, 0, numArr.length - 1);
  return count;
}
