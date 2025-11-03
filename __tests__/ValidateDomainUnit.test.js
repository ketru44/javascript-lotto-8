describe("로또 도메인 검증", () => {
  test("로또 번호는 6개이어야 한다.", () => {
    expect(() => validateLottoNumbers([1, 2, 3, 4, 5])).toThrow();
  });
  test("각 로또 번호는 1~45 범위 안에 있어야 한다.", () => {
    expect(() => validateLottoNumbers([0, 1, 2, 3, 4, 5])).toThrow(); // < 1
    expect(() => validateLottoNumbers([1, 2, 3, 4, 5, 46])).toThrow(); // > 45
  });
  test("로또 번호는 중복될 수 없다.", () => {
    expect(() => validateLottoNumbers([1, 2, 3, 4, 5, 5])).toThrow();
  });
  test("정상적인 로또 번호는 에러를 발생시키지 않는다.", () => {
    expect(() => validateLottoNumbers([1, 2, 3, 4, 5, 45])).not.toThrow();
  })
})