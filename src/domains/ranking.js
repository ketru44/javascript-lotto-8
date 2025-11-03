import { includesNumber } from "../utils/array";

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