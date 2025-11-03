import { MissionUtils } from "@woowacourse/mission-utils";

export const randomUniquesInRange = (min, max, quantity) =>
  MissionUtils.Random.pickUniqueNumbersInRange(min, max, quantity);