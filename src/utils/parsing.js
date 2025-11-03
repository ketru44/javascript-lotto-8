export const toNumber = (str) => Number(str);

export const parseToArrayByComma = (arr) => arr.split(",").map(n => toNumber(n.trim()));

export const devisionNumber = (divdend, divisor) => divdend / divisor;