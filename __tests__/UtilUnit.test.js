import { toNumber, parseToArrayByComma } from "../src/utils/parsing";

describe("파싱 유틸 검증", () => {
  test("숫자로 이루어진 문자열을 숫자 타입으로 변환한다.", () => {
    expect(toNumber("123")).toBe(123);
  });
  test("쉼표를 포함하는 문자열을 쉼표로 나누어 숫자 배열로 변환한다.", () => {
    expect(parseToArrayByComma("1,2,3")).toStrictEqual([1, 2, 3]);
  })
})