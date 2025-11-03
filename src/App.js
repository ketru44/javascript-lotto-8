import { INPUT_QUESTION, LABELS } from "./constants/ioMsg";
import { LOTTO_CONSTANTS, PRIZE_TABLE, RANK_TABLE } from "./constants/lotto";
import { askUntilValid } from "./askUntilValid";
import { devisionNumber, parseToArrayByComma, toNumber } from "./utils/parsing";
import { validateBonusNumber, validateCost, validateLottoNumbers } from "./domains/validate";
import { createLottos } from "./domains/createLottoNumbers";
import { MissionUtils } from "@woowacourse/mission-utils";
import { randomUniquesInRange } from "./utils/random";
import { calculateMatchCount, determineRankOf, isBonusMatch } from "./domains/ranking";

class App {
  async run() {
    const purchasedAmount = await askUntilValid({
      question: INPUT_QUESTION.COST,
      parse: toNumber,
      makeAndValidate: validateCost
    });
    const ticketAmount = devisionNumber(purchasedAmount, LOTTO_CONSTANTS.TICKET_PRICE);
    const lottos = createLottos(ticketAmount, randomUniquesInRange);

    MissionUtils.Console.print(`${ticketAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);
    });

    const winningNums = await askUntilValid({
      question: INPUT_QUESTION.WINNING_NUMS,
      parse: parseToArrayByComma,
      makeAndValidate: validateLottoNumbers,
    });

    const results = lottos.map((lotto) => {
      const matched = calculateMatchCount(lotto.numbers, winningNums);
      const bonusFlag = isBonusMatch(lotto.numbers, bonusNum);
      const rank = determineRankOf(matched, bonusFlag, RANK_TABLE);
      return { matched, bonusFlag, rank };
    });

    const rankCounts = results.reduce((acc, { rank }) => {
      if (rank) acc[rank] = (acc[rank] || 0) + 1;
      return acc;
    }, {});

    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    Object.entries(PRIZE_TABLE).forEach(([rank, prize]) => {
      const count = rankCounts[rank] || 0;
      MissionUtils.Console.print(`${LABELS[rank]} (${prize.toLocaleString()}원) - ${count}개`);
    });


    const bonusNum = await askUntilValid({
      question: INPUT_QUESTION.COST,
      parse: toNumber,
      makeAndValidate: (n) => validateBonusNumber(n, winningNums),
    });
  }
}

export default App;
