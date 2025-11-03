import { LOTTO_CONSTANTS, ERROR_MSG } from "../constants"

export const hasExactSize = (arr) =>
  arr.length === LOTTO_CONSTANTS.NUMBERS_PER_TICKET || ERROR_MSG.LOTTO_SIZE

export const inRange = (arr) => 
  arr.every( // every: 함수형, 즉시 종료
    n => 
      n >= LOTTO_CONSTANTS.MIN_NUMBER &&
      n <= LOTTO_CONSTANTS.MAX_NUMBER
    ) || ERROR_MSG.LOTTO_NUM_RANGE;

export const isUnique = (arr) =>
  new Set(arr).size === arr.length || ERROR_MSG.LOTTO_NUM_UNIQUE;

export const lottoRules = [hasExactSize, inRange, isUnique];
