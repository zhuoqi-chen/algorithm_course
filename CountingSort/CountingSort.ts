/**
 *  计数排序
 * @param nums number数组
 * @param R nums参数的最大值(取值范围)
 */
export function CountingSort(nums: number[], R: number) {
  // 计算每个元素的出现频次
  const countMap: Record<string, number> = nums.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {} as Record<string, number>);
  // 新建一个index的数组,
  // [index[i],index[i+1]] 的值为i
  const indexArr = new Array(R + 1).fill(0);
  for (let i = 0; i < R; i++) {
    // 右边界 = 左边界 + 值为i元素的个数
    indexArr[i + 1] = indexArr[i] + (countMap[i] || 0);
  }
  // 根据index边界数据,覆盖原有数组的值
  for (let i = 0; i + 1 < indexArr.length; i++) {
    for (let j = indexArr[i]; j < indexArr[i + 1]; j++) {
      nums[j] = i;
    }
  }
  return nums;
}

CountingSort([3, 3, 3, 2, 1, 4], 5);
