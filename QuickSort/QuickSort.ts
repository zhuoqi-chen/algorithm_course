export class QuickSort {
  static sort(arr: number[]) {
    this.sortR(arr, 0, arr.length - 1);
    return arr;
  }
  static sortR(arr: number[], l: number, r: number) {
    if (l > r) {
      return;
    }
    const p = this.partition(arr, l, r);
    this.sortR(arr, l, p - 1);
    this.sortR(arr, p + 1, r);
  }
  static partition(arr: number[], l: number, r: number) {
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < arr[l]) {
        j++;
        this.swap(arr, j, i);
      }
    }
    this.swap(arr, l, j);
    return j;
  }
  static swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
