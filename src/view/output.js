import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MSG, LABELS } from "../constants/ioMsg";
import { PRIZE_TABLE } from "../constants/lotto";

export function printGeneratedLottos(ticketAmount, lottos) {
  printUsingWoowa(OUTPUT_MSG.PURCHASED_TICKETS(ticketAmount))
  lottos.forEach((lotto) => {
    printUsingWoowa(`[${lotto.numbers.join(", ")}]`);
  });
}

export function printResultStats(rankCounts, roi) {
  printUsingWoowa(OUTPUT_MSG.WINNING_STATS_HEADER);
  printUsingWoowa(OUTPUT_MSG.WINNING_STATS_DIVIDER);
  Object.entries(PRIZE_TABLE).forEach(([rank, prize]) => {
    const count = rankCounts[rank] || 0;
    printUsingWoowa(`${LABELS[rank]} (${prize.toLocaleString()}원) - ${count}개`);
  });
  printUsingWoowa(OUTPUT_MSG.ROI_RESULT(roi));
}

function printUsingWoowa(msg) {
  MissionUtils.Console.print(msg);
}