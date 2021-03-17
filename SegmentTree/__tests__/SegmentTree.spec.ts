import { MergerFn, SegmentTree } from "../SegmentTree";

const add: MergerFn = (a, b) => a + b;
describe("test SegmentTree", () => {
  describe("test tree result", () => {
    const caseList = [
      {
        input: [1],
        output: [1],
      },
      {
        input: [1, 2],
        output: [3, 1, 2],
      },
      {
        input: [1, 2, 3],
        output: [6, 3, 3, 1, 2],
      },
    ];
    caseList.forEach(({ input, output }) => {
      it(`test case [${input}] should return [${output}]`, () => {
        const tree = new SegmentTree(input, add);
        expect(tree.getTree()).toEqual(output);
      });
    });
  });
  describe("test query", () => {
    const caseList = [
      {
        left: 0,
        right: 0,
        output: 1,
      },
      {
        left: 0,
        right: 1,
        output: 3,
      },
      {
        left: 2,
        right: 4,
        output: 12,
      },
      {
        left: 4,
        right: 4,
        output: 5,
      },
    ];
    const arr = [1, 2, 3, 4, 5];
    caseList.forEach(({ left, right, output }) => {
      it(`test query(${left},${right}) should return ${output}`, () => {
        const tree = new SegmentTree(arr, add);
        expect(tree.query(left, right)).toEqual(output);
      });
    });
  });
});
