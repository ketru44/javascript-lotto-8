import { LOTTO_CONSTANTS } from "../constants/lotto"
import Lotto from "../entities/Lotto";

export function creatOneLotto(drawUniqueNumbers) {
  const { MIN_NUMBER, MAX_NUMBER, NUMBERS_PER_TICKET } = LOTTO_CONSTANTS
  const numbers = drawUniqueNumbers( MIN_NUMBER, MAX_NUMBER, NUMBERS_PER_TICKET );
  return new Lotto(numbers);
};

export function createLottos(quantity, drawUniqueNumbers) {
  return Array.from({ length: quantity }, () => 
    creatOneLotto(drawUniqueNumbers)
  );
};
