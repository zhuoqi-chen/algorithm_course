export class BubbleSort {
  static sort(arr: number[]) {
    const length = arr.length;
    for (let i = 0; i + 1 < arr.length; i++) {
      for (let j = 0; j <= length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          BubbleSort.swag(arr, i, j + 1);
        }
      }
    }
    return arr;
  }
  static swag(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
