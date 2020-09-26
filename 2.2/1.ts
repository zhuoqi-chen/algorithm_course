const data = [12, 34, 53, 23, 23, 34, 235, 342345, 3, 16, 43, 7, 43];

function findIndex(data: number[], target: number) {
  for (let index = 0; index < data.length; index++) {
    const curr = data[index];
    if (curr === target) {
      return index;
    }
  }
  return -1;
}

console.log(findIndex(data, 16));
