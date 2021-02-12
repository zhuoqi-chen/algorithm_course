export class MergeSort {
  sort(arr: Array<number>) {
    this.sortR(arr, 0, arr.length - 1);
  }
  sortR(arr: Array<number>, l: number, r: number) {
    if (l >= r) {
      return;
    }
    const mid = Math.floor((l + r) / 2);
    this.sortR(arr, l, mid);
    this.sortR(arr, mid + 1, r);
    this.merger(arr, l, mid, r);
  }
  merger(arr: Array<number>, l: number, mid: number, r: number) {
    const copyArr = arr.slice(l, r + 1);
    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = copyArr[j - l];
        j++;
      } else if (j > r) {
        arr[k] = copyArr[i - l];
        i++;
      } else if (copyArr[i - l] <= copyArr[j - l]) {
        arr[k] = copyArr[i - l];
        i++;
      } else {
        arr[k] = copyArr[j - l];
        j++;
      }
    }
  }
}
