export class QuickSortThreeWays {
  static sort(arr: number[]) {
    this.sortR(arr, 0, arr.length - 1);
    return arr;
  }
  static sortR(arr: number[], l: number, r: number) {
    if (l >= r) {
      return;
    }
    const randomNum = this.getRandomNumber(l, r);
    this.swap(arr, l, randomNum);
    let lt = l;
    let i = l + 1;
    let gt = r + 1;
    // arr[l+1,lt] <v, arr[lt+1, i-1] =v, arr[gt,r] > v
    while (i < gt) {
      if (arr[i] < arr[l]) {
        lt++;
        this.swap(arr, lt, i);
        i++;
      } else if (arr[i] > arr[l]) {
        gt--;
        this.swap(arr, i, gt);
      } else {
        i++;
      }
    }
    this.swap(arr, l, lt);
    this.sortR(arr, l, lt - 1);
    this.sortR(arr, gt, r);
  }
  static getRandomNumber(maxNum: number, minNum: number) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  }
  static swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
