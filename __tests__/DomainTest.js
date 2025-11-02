import { calculateMatchCount } from "../src/domains/ranking";
describe("순위 결정 관련 비지니스 로직", () => {
  test("일치하는 개수를 반환한다.", () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const winning = [1, 2, 3, 4, 5, 6];
    expect(calculateMatchCount(ticket, winning)).toBe(6);
  });
  test("하나도 일치하지 않을 경우 0을 반환한다.", () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const winning = [7, 8, 9, 10, 11, 12];
    expect(calculateMatchCount(ticket, winning)).toBe(0);
  });
})