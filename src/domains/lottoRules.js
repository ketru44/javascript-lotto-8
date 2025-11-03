import { LOTTO_CONSTANTS, ERROR_MSG } from "../constants"

export const inRange = (arr) => 
  arr.every( // every: 함수형, 즉시 종료
    n => 
      n >= LOTTO_CONSTANTS.MIN_NUMBER && // 1
      n <= LOTTO_CONSTANTS.MAX_NUMBER // 45
    ) || ERROR_MSG.LOTTO_NUM_RANGE;

