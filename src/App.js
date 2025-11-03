import { LABELS, OUTPUT_MSG } from "./constants/ioMsg";
import { LOTTO_CONSTANTS, PRIZE_TABLE, RANK_TABLE } from "./constants/lotto";
import { readBonusNumberUntilValid, readPurchasedAmountUntilValid, readWinningNumbersUntilValid } from "./view/input";
import { devisionNumber } from "./utils/parsing";
import { createLottos } from "./domains/createLottoNumbers";
import { MissionUtils } from "@woowacourse/mission-utils";
import { randomUniquesInRange } from "./utils/random";
import { calculateMatchCount, determineRankOf, isBonusMatch } from "./domains/ranking";
import { accumulateProfit, getRateOfInvestmentByPercent } from "./domains/profit";

class App {
  async run() {
    const purchasedAmount = await readPurchasedAmountUntilValid();
    const ticketAmount = devisionNumber(purchasedAmount, LOTTO_CONSTANTS.TICKET_PRICE);
    const lottos = createLottos(ticketAmount, randomUniquesInRange);

    MissionUtils.Console.print(OUTPUT_MSG.PURCHASED_TICKETS(ticketAmount));
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);
    });

    const winningNums = await readWinningNumbersUntilValid();
    const bonusNum = await readBonusNumberUntilValid(winningNums);

    const results = lottos.map((lotto) => {
      const matched = calculateMatchCount(lotto.numbers, winningNums);
      const bonusFlag = isBonusMatch(lotto.numbers, bonusNum);
      const rank = determineRankOf(matched, bonusFlag, RANK_TABLE);
      return { matched, bonusFlag, rank };
    });
    
    const rankResultArr = results.map(({rank}) => rank);
    const totalProfit = accumulateProfit(rankResultArr, PRIZE_TABLE);
    const rateOfInvestment = getRateOfInvestmentByPercent(totalProfit, purchasedAmount);

    const rankCounts = results.reduce((acc, { rank }) => {
      if (rank) acc[rank] = (acc[rank] || 0) + 1;
      return acc;
    }, {});

    MissionUtils.Console.print(OUTPUT_MSG.WINNING_STATS_DIVIDER);
    MissionUtils.Console.print(OUTPUT_MSG.WINNING_STATS_DIVIDER);
    Object.entries(PRIZE_TABLE).forEach(([rank, prize]) => {
      const count = rankCounts[rank] || 0;
      MissionUtils.Console.print(`${LABELS[rank]} (${prize.toLocaleString()}원) - ${count}개`);
    });
    MissionUtils.Console.print(OUTPUT_MSG.ROI_RESULT(rateOfInvestment));
  }
}

export default App;
