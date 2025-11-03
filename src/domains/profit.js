export function accumulateProfit(rankArr, PRIZE_TABLE) {
  const totalProfit = rankArr.reduce(
    (profit, rank) => profit + PRIZE_TABLE[rank], 
    0
  );
  return totalProfit;
};

// 출력 요구사항에 "수익률은 소수점 둘째 자리에서 반올림한다"를 통해 반올림만 명시 
// -> 퍼센트 변환는 계산, 반올림은 표현의 영역이라고 판단
export function getRateOfInvestmentByPercent(totalProfit, investment) { 
  const ratio = totalProfit / investment;
  const ratioByPercent = ratio * 100;
  return ratioByPercent;
}
