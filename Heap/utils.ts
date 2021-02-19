export function getRadomNumberArray(size: number = 10) {
  return [
    ...new Set(
      Array.from({ length: size }, (item) => Math.floor(Math.random() * size))
    ),
  ];
}
