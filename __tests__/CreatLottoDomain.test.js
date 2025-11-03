import { MissionUtils } from "@woowacourse/mission-utils";
import { createLottos, creatOneLotto } from "../src/domains/createLottoNumbers";
import { randomUniquesInRange } from "../src/utils/random";
import Lotto from "../src/entities/Lotto";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 번호 생성 테스트", () => {
  test("1~45 사이의 중복되지 않는 숫자 6개를 반환한다.", () => {
    const expectedLotto = [1, 2, 3, 4, 44, 45];

    mockRandoms([expectedLotto]);
    const lottoInstance = creatOneLotto(randomUniquesInRange);
    
    expect(lottoInstance).toBeInstanceOf(Lotto);
    expect(lottoInstance.numbers).toEqual(expectedLotto);
  });
  test("quantity만큼의 로또 세트를 반환한다..", () => {
    const sample = [1, 2, 3, 4, 44, 45];
    
    mockRandoms([ sample, sample, sample, sample, sample, sample ]) // 6개 모킹

    // 5개만 생성 확인
    expect(createLottos(5, randomUniquesInRange).length).toBe(5);
  })
})