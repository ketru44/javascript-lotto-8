// 재사용을 하기에 util로 분리
export const includesNumber = (arr, num) =>  arr.includes(num);

export const toArray = (value) => {
  if(Array.isArray(value)) return value;
  return [value];
}