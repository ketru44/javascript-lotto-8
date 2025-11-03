import { lottoRules } from "./lottoRules";

export function validateLottoNumbers(lottoArr) {
  for(const rule of lottoRules) {
    const result = rule(lottoArr);
    if(result !== true) return result; // err_msg
  }
  return true; // 모두 통과
}