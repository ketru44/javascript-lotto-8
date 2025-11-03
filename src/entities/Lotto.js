import { validateLottoNumbers } from "../domains/validate";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validateResult = validateLottoNumbers(numbers);
    if(validateResult !== true) throw new Error(validateResult);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
