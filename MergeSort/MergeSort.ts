export class MergeSort {
  merger(arr: Array<number>, l: number, mid: number, r: number) {
    const tmpArr = arr.slice(l, r);
    let i = l;
    let j = mid + 1;
    for (let k = l; k < r; k++) {
      if (i > mid) {
        arr[k] = tmpArr[j - l];
        j++;
      } else if (j > r) {
        arr[k] = tmpArr[i - l];
        i++;
      } else if (tmpArr[i - l] < tmpArr[j - l]) {
        arr[k] = tmpArr[i - l];
        i++;
      } else {
        arr[k] = tmpArr[j - l];
      }
    }
  }
}
