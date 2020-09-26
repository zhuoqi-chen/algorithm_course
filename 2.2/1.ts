export function findIndex<T extends { equals: (target: T) => boolean }>(
  data: T[] | number[] | string[],
  target: T | number | string
) {
  for (let index = 0; index < data.length; index++) {
    const curr = data[index];
    if (curr === target) {
      return index;
    }
    if (
      typeof curr === "object" &&
      typeof target === "object" &&
      "equals" in curr &&
      "equals" in target &&
      curr.equals(target)
    ) {
      return index;
    }
  }
  return -1;
}
