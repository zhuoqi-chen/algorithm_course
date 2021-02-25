export class ShellSort {
  static sort(arr: number[]) {
    const length = arr.length;
    let h = Math.floor(length / 2);

    while (h > 0) {
      for (let start = 0; start < h; start++) {
        // [start,start+h,start+2h,start+3h,....]
        for (let i = start + h; i < length; i += h) {
          const temp = arr[i];
          let j;
          for (j = i; j - h >= 0 && temp < arr[j - h]; j -= h) {
            arr[j] = arr[j - h];
          }
          arr[j] = temp;
        }
      }
      h = Math.floor(h / 2);
    }
    return arr;
  }
  static swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
