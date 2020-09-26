export function findIndex<T>(data: T[], target: T) {
  for (let index = 0; index < data.length; index++) {
    const curr = data[index];
    if (curr === target) {
      return index;
    }
  }
  return -1;
}
