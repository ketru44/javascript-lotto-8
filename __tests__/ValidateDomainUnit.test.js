import { validateLottoNumbers, validateBonusNumber, validateCost } from "../src/domains/validate";
import { ERROR_MSG } from "../src/constants";

describe("당첨 번호 도메인 검증", () => {
  test("로또 번호는 6개이어야 한다.", () => {
    expect(validateLottoNumbers([1, 2, 3, 4, 5])).toBe(ERROR_MSG.LOTTO_SIZE);
  });
  test("각 로또 번호는 1~45 범위 안에 있어야 한다.", () => {
    expect(validateLottoNumbers([0, 1, 2, 3, 4, 5])).toBe(ERROR_MSG.LOTTO_NUM_RANGE); // < 1
    expect(validateLottoNumbers([1, 2, 3, 4, 5, 46])).toBe(ERROR_MSG.LOTTO_NUM_RANGE); // > 45
  });
  test("로또 번호는 중복될 수 없다.", () => {
    expect(validateLottoNumbers([1, 2, 3, 4, 5, 5])).toBe(ERROR_MSG.LOTTO_NUM_UNIQUE);
  });
  test("정상적인 로또 번호는 true를 반환한다..", () => {
    expect(validateLottoNumbers([1, 2, 3, 4, 5, 45])).toBe(true);
  });
});

describe("보너스 번호 도메인 검증", () => {
  test("보너스 번호는 1~45 범위 안에 있어야 한다.", () => {
    expect(validateBonusNumber(46)).toBe(ERROR_MSG.LOTTO_NUM_RANGE);
  });
  test("보너스 번호는 로또 번호와 중복될 수 없다.", () => {
    expect(validateBonusNumber(4, [1, 2, 3, 4, 5, 6])).toBe(ERROR_MSG.LOTTO_NUM_UNIQUE);
  });
  test("정상적인 보너스 번호는 true를 반환한다.", () => {
    expect(validateBonusNumber(25, [1, 2, 3, 4, 5, 6])).toBe(true);
  })
});

describe("구입 금액 도메인 검증", () => {
  test("구입 금액은 단위가 1000이어야 한다.", () => {
    expect(validateCost(2500)).toBe(ERROR_MSG.COST_UNIT);
  });
  test("정상적인 구입 금액은 true를 반환한다.", () => {
    expect(validateCost(2000)).toBe(true);
  })
})