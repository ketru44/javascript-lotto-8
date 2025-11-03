import { validateLottoNumbers, validateBonusNumber } from "../src/domains/validate";
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
  test("정상적인 로또 번호는 에러를 발생시키지 않는다.", () => {
    expect(validateLottoNumbers([1, 2, 3, 4, 5, 45])).toBe(true);
  });
});

describe("보너스 번호 도메인 검증", () => {
  test("보너스 번호는 1~45 범위 안에 있어야 한다.", () => {
    expect(validateBonusNumber(46)).toBe(ERROR_MSG.LOTTO_NUM_RANGE);
  });
  test("보너스 번호는 로또 번호와 중복될 수 없다.", () => {
    expect(validateBonusNumber(4, [1, 2, 3, 4, 5, 6])).toBe(ERROR_MSG.LOTTO_NUM_UNIQUE);
  })
})