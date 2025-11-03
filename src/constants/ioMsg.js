export const INPUT_QUESTION = Object.freeze({
  COST: "구입금액을 입력해 주세요.",
  WINNING_NUMS: "당첨 번호를 입력해 주세요.",
  BONUS_NUM: "보너스 번호를 입력해 주세요.",
});

export const OUTPUT_MSG = Object.freeze({
  PURCHASED_TICKETS: (count) => `${count}개를 구매했습니다.`,
  WINNING_STATS_HEADER: "\n당첨 통계",
  WINNING_STATS_DIVIDER: "---",
  ROI_RESULT: (roi) => `총 수익률은 ${roi}%입니다.`,
});

export const LABELS = {
  5: "3개 일치",
  4: "4개 일치",
  3: "5개 일치",
  2: "5개 일치, 보너스 볼 일치",
  1: "6개 일치",
};
