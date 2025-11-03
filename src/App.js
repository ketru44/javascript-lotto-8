import { INPUT_QUESTION } from "./constants/ioMsg";
import { askUntilValid } from "./askUntilValid";
import { parseToArrayByComma, toNumber } from "./utils/parsing";
import { validateBonusNumber, validateCost, validateLottoNumbers } from "./domains/validate";
class App {
  async run() {
    const tickets = await askUntilValid({
      question: INPUT_QUESTION.COST,
      parse: toNumber,
      makeAndValidate: validateCost
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
