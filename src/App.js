import { INPUT_QUESTION } from "./constants/ioMsg";
import { LOTTO_CONSTANTS } from "./constants/lotto";
import { askUntilValid } from "./askUntilValid";
import { devisionNumber, parseToArrayByComma, toNumber } from "./utils/parsing";
import { validateBonusNumber, validateCost, validateLottoNumbers } from "./domains/validate";
import { createLottos } from "./domains/createLottoNumbers";
import { MissionUtils } from "@woowacourse/mission-utils";
import { randomUniquesInRange } from "./utils/random";

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
    const bonusNum = await askUntilValid({
      question: INPUT_QUESTION.COST,
      parse: toNumber,
      makeAndValidate: (n) => validateBonusNumber(n, winningNums),
    });
  }
}

export default App;
