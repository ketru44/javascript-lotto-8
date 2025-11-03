import { LOTTO_CONSTANTS } from "../constants"

export function creatOneLotto(drawUniqueNumbers) {
  const {MIN_NUMBER, MAX_NUMBER, NUMBERS_PER_TICKET} = LOTTO_CONSTANTS
  return drawUniqueNumbers(MIN_NUMBER, MAX_NUMBER, NUMBERS_PER_TICKET);  
};

