export const LOTTO_CONSTANTS = Object.freeze({
  TICKET_PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_PER_TICKET: 6,
});

export const RANK_TABLE = Object.freeze({ // 일치하는 숫자 개수 : { bonusTrue : 랭크, bonusFalse: 랭크}
  6: Object.freeze({true: 1, false: 2,}),
  5: Object.freeze({true: 2, false: 3,}),
  4: Object.freeze({true: 4, false: 4,}),
  3: Object.freeze({true: 5, false: 5,}),
  2: Object.freeze({true: 6, false: 6,}),
  1: Object.freeze({true: 6, false: 6,}),
  0: Object.freeze({true: 6, false: 6,}),
});

export const PRIZE_TABLE = Object.freeze({
  1: 2_000_000_000,
  2: 30_000_000,    // 5개 일치 + 보너스 번호 일치
  3: 1_500_000,
  4: 50_000,
  5: 5_000,
  6: 0,
});