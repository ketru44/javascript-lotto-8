import { askUntilValid } from "../askUntilValid";
import { INPUT_QUESTION } from "../constants/ioMsg";
import { parseToArrayByComma, toNumber } from "../utils/parsing";
import { validateBonusNumber, validateCost, validateLottoNumbers } from "../domains/validate";

export async function readPurchasedAmountUntilValid() {
  return askUntilValid({
    question: INPUT_QUESTION.COST,
    parse: toNumber,
    makeAndValidate: validateCost,
  });
}

export async function readWinningNumbersUntilValid() {
  return askUntilValid({
    question: INPUT_QUESTION.WINNING_NUMS,
    parse: parseToArrayByComma,
    makeAndValidate: validateLottoNumbers,
  });
}

export async function readBonusNumberUntilValid(winning) {
  return askUntilValid({
    question: INPUT_QUESTION.BONUS_NUM,
    parse: toNumber,
    makeAndValidate:  (n) => validateBonusNumber(n, winning),
  });
}