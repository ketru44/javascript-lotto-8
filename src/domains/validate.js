import { inRange } from "./lottoRules";

export function validateLottoNumbers(lottoArr) {
  const r = inRange(lottoArr);
  if(r !== true) return r 
  return true;  
}