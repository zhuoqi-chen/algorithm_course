export class BubbleSort {
  static sort(arr: number[]) {
    const length = arr.length;
    for (let i = 0; i + 1 < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          BubbleSort.swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  static sortOptimize1(arr: number[]) {
    const length = arr.length;
    for (let i = 0; i + 1 < length; i++) {
      let isSwapped = false;
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          isSwapped = true;
          BubbleSort.swap(arr, j, j + 1);
        }
      }
      if (!isSwapped) {
        break;
      }
    }
    return arr;
  }
  static sortOptimize2(arr: number[]) {
    const length = arr.length;
    for (let i = 0; i + 1 < length; ) {
      let lastSwapped = 0;
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          BubbleSort.swap(arr, j, j + 1);
          lastSwapped = j + 1;
        }
      }
      i = length - lastSwapped;
    }
    return arr;
  }
  static swap(arr: number[], i: number, j: number) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}
