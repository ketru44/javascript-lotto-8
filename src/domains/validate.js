import { lottoRules, bonusRules } from "./lottoRules";

export function validateLottoNumbers(lottoArr) {
  for(const rule of lottoRules) {
    const result = rule(lottoArr);
    if(result !== true) return result; // err_msg
  }
  return true; // 모두 통과
}

export function validateBonusNumber(lottoArr, bonusNum) {
  for(const rule of bonusRules) {
    const result = rule(lottoArr, bonusNum);
    if(result !== true) return result;
  }
  return true;
}