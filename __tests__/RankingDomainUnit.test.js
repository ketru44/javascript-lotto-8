import { calculateMatchCount, isBonusMatch, determineRankOf } from "../src/domains/ranking";
import { RANK_TABLE } from "../src/constants";

describe("순위 결정 관련 비지니스 로직 단위 테스트", () => {
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
  test("보너스 넘버를 포함하고 있다면 true를 반환한다.", () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const bonusInclude = 5
    expect(isBonusMatch(ticket, bonusInclude)).toBe(true);
  });
  test("보너스 넘버를 포함하고 있지않다면 false를 반환한다.", () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const bonusNotInclude = 45;
    expect(isBonusMatch(ticket, bonusNotInclude)).toBe(false);
  });
  test("일치하는 번호의 수가 5개이고 보너스 번호가 일치하면 2등이다.", () => {
    const matchedCnt = 5;
    const isBonusMatch = true;
    expect(determineRankOf(matchedCnt, isBonusMatch, RANK_TABLE)).toBe(2);
  })
  test("일치하는 번호의 수가 5개이고 보너스 번호가 일치하지 않으면 3등이다.", () => {
    const matchedCnt = 5;
    const isBonusMatch = false;
    expect(determineRankOf(matchedCnt, isBonusMatch, RANK_TABLE)).toBe(3);
  })
});