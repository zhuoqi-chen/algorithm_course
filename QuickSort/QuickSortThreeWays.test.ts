import { QuickSortThreeWays } from "./QuickSortThreeWays";

function generateNumberArr(length: number) {
  return Array.from({ length }).map((item) =>
    Math.floor(Math.random() * length)
  );
}
const testArr = generateNumberArr(30);

console.log(testArr);
console.log(QuickSortThreeWays.sort(testArr));
