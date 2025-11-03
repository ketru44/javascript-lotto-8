import { LABELS, OUTPUT_MSG } from "./constants/ioMsg";
import { LOTTO_CONSTANTS, PRIZE_TABLE, RANK_TABLE } from "./constants/lotto";
import { readBonusNumberUntilValid, readPurchasedAmountUntilValid, readWinningNumbersUntilValid } from "./view/input";
import { devisionNumber } from "./utils/parsing";
import { createLottos } from "./domains/createLottoNumbers";
import { MissionUtils } from "@woowacourse/mission-utils";
import { randomUniquesInRange } from "./utils/random";
import { calculateMatchCount, determineRankOf, getResultOfLotto, isBonusMatch } from "./domains/ranking";
import { accumulateProfit, getRateOfInvestmentByPercent } from "./domains/profit";
import { printGeneratedLottos, printResultStats } from "./view/output";

class App {
  async run() {
    const purchasedAmount = await readPurchasedAmountUntilValid();
    const ticketAmount = devisionNumber(purchasedAmount, LOTTO_CONSTANTS.TICKET_PRICE);

    const lottos = createLottos(ticketAmount, randomUniquesInRange); // 난수 생성 함수를 주입 

    printGeneratedLottos(ticketAmount, lottos);

    const winningNums = await readWinningNumbersUntilValid();
    const bonusNum = await readBonusNumberUntilValid(winningNums);

    const results = getResultOfLotto(lottos, winningNums, bonusNum);
    const rankResultArr = results.map(({rank}) => rank);
    const totalProfit = accumulateProfit(rankResultArr, PRIZE_TABLE);
    const rateOfInvestment = getRateOfInvestmentByPercent(totalProfit, purchasedAmount); // 

    const rankCounts = results.reduce((acc, { rank }) => {
      if (rank) acc[rank] = (acc[rank] || 0) + 1;
      return acc;
    }, {});

    printResultStats(rankCounts, rateOfInvestment);
  }
}

export default App;
