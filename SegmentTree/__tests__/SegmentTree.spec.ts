import { MergerFn, SegmentTree } from "../SegmentTree";
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
const add: MergerFn = (a, b) => a + b;
describe.only("test SegmentTree", () => {
  caseList.forEach(({ input, output }) => {
    it(`test case [${input}] should return [${output}]`, () => {
      const tree = new SegmentTree(input, add);
      expect(tree.getTree()).toEqual(output);
    });
  });
});
