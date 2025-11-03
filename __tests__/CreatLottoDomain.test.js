import { MissionUtils } from "@woowacourse/mission-utils";
import { creatOneLotto } from "../src/domains/createLottoNumbers";
import { randomUniquesInRange } from "../src/utils/random";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 번호 생성 테스트", () => {
  test("1~45 사이의 중복되지 않는 숫자 6개를 생성한다.", () => {
    mockRandoms([[1, 2, 3, 4, 44, 45]]);
    expect(creatOneLotto(randomUniquesInRange)).toStrictEqual([1, 2, 3, 4, 44, 45]);
  });
})