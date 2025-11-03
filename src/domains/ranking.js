import { includesNumber } from "../utils";
import { RANK_TABLE } from "../constants/lotto";

export function calculateMatchCount(ticket, winning, numbersPerTicket = 6) {
  const uniqueNumbers = new Set([...ticket, ...winning]);
  return numbersPerTicket * 2 - uniqueNumbers.size;
};

export function isBonusMatch(ticket, bonusNum) {
  return includesNumber(ticket, bonusNum);
};

export function determineRankOf(matchedCnt, bonusFlag, RANK_TABLE) {
  const rank = RANK_TABLE[matchedCnt][bonusFlag];
  return rank;
};

export function getResultOfLotto(lottos, winningNums, bonusNum) {
  return lottos.map((lotto) => {
    const matched = calculateMatchCount(lotto.numbers, winningNums);
    const bonusFlag = isBonusMatch(lotto.numbers, bonusNum);
    const rank = determineRankOf(matched, bonusFlag, RANK_TABLE);
    return { matched, bonusFlag, rank };
  });
};
