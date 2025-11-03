export function accumulateProfit(rankArr, PRIZE_TABLE) {
  const totalProfit = rankArr.reduce(
    (profit, rank) => profit + PRIZE_TABLE[rank], 
    0
  );
  return totalProfit;
};
