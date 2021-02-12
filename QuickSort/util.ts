export function generateNumberArr(length: number) {
  return Array.from({ length }).map((item) =>
    Math.floor(Math.random() * length)
  );
}
