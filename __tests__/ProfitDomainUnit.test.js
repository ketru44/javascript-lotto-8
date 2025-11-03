import { accumulateProfit, getRateOfInvestmentByPercent } from "../src/domains/profit";
import { PRIZE_TABLE } from "../src/constants";

describe("로또 수익 관련 로직 단위 테스트", () => {
  test("1등, 4등을 했을 때 2,000,050,000을 반환한다.", () => {
    const rankOflottos = [1, 4]
    const profit = 2_000_050_000 // 1등(2억) + 4등(5만)
    expect(accumulateProfit(rankOflottos, PRIZE_TABLE)).toBe(profit);
  });
  test("6등을 했을 떄는 0을 반환한다.", () => {
    const rank_6th = [6, 6, 6];
    const profit = 0;
    expect(accumulateProfit(rank_6th, PRIZE_TABLE)).toBe(profit);
  });
  test("퍼센트 환산된 수익률을 반환한다.", () => {
    // 2000 / 1000 = 2 -> 200%
    expect(getRateOfInvestmentByPercent(2000, 1000)).toBe(200);
    // 995 / 1000 = 0.995 -> 99.5%
    expect(getRateOfInvestmentByPercent(995, 1000)).toBe(99.5);
  });
  test("소수점 이하의 결과를 정확히 반환한다.", () => {
    // 3333 / 7000 = 0.47614... -> 47.614..%
    const expectAboutResult = 47.614
    expect(getRateOfInvestmentByPercent(3333, 7000)).toBeCloseTo(expectAboutResult);
  });
})