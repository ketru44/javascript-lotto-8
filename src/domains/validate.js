import { costRules,lottoRules, bonusRules } from "./lottoRules";

export function validateCost(cost) {
  for(const rule of costRules) {
    const result = rule(cost);
    if(result !== true) return result;
  }
  return true;
}

export function validateLottoNumbers(lottoArr) {
  for(const rule of lottoRules) {
    const result = rule(lottoArr);
    if(result !== true) return result; // err_msg
  }
  return true; // 모두 통과
}

export function validateBonusNumber(bonusNum, lottoArr) {
  for(const rule of bonusRules) {
    const result = rule(bonusNum, lottoArr);
    if(result !== true) return result;
  }
  return true;
}