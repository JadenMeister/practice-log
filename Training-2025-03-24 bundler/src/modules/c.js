function c() {
  return "c";
}

// ? 기본 내보내기(Default Export)
// * 하나의 모듈에서 하나의 기본 내보내기만 가능
// * 기본 내보내기는 모듈 이름을 임의로 지정할 수 있음
// * '단일 책임(검색어: SRP)'을 가지는 모듈에 사용하는 것에 적합
export default c;