import { LOTTO_CONSTANTS, ERROR_MSG } from "../constants/lotto"
import { toArray, includesNumber } from "../utils/array";

// 로또의 비지니스 규칙과 관련된 검증들
export const isValidPurchaseAmount = (amount) =>
  amount % LOTTO_CONSTANTS.TICKET_PRICE === 0 || ERROR_MSG.COST_UNIT;

export const hasExactSize = (arr) =>
  arr.length === LOTTO_CONSTANTS.NUMBERS_PER_TICKET || ERROR_MSG.LOTTO_SIZE

export const inRange = (valueOrArr) => {
  const arr = toArray(valueOrArr);
  return arr.every( // every: 함수형, 즉시 종료
    n => 
      n >= LOTTO_CONSTANTS.MIN_NUMBER &&
      n <= LOTTO_CONSTANTS.MAX_NUMBER
    ) || ERROR_MSG.LOTTO_NUM_RANGE;
}

export const isLottoNumUnique = (arr) =>
  new Set(arr).size === arr.length || ERROR_MSG.LOTTO_NUM_UNIQUE;

export const isBonusUnique = (num, arr) => 
  !includesNumber(arr, num) || ERROR_MSG.LOTTO_NUM_UNIQUE;

export const costRules = [isValidPurchaseAmount];
export const lottoRules = [hasExactSize, inRange, isLottoNumUnique];
export const bonusRules = [inRange, isBonusUnique];

