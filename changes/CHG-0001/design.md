# 설계

Node ESM의 두 소스 모듈로 구성하고 외부 의존성을 추가하지 않는다.

- A는 `src/normalize-name.js`만 변경한다. named export `normalizeName(value)`는 `typeof value !== 'string'`이면 즉시 `TypeError`를 던지고, 그렇지 않으면 `value.trim().normalize('NFC')`를 반환한다. 빈 결과도 빈 문자열로 유지한다.
- B는 A의 PR 병합 후 `src/greeting.js`만 변경한다. `./normalize-name.js`에서 `normalizeName`을 named import하고, named export `greet(value)`에서 `normalizeName(value)`의 결과를 사용한다. 결과가 비면 `guest`를 선택해 템플릿 문자열 `Hello, ${name}!`으로 반환한다. 비문자열 입력의 `TypeError`는 그대로 전파한다.
- 고정 테스트, `package.json`, lockfile 및 다른 파일은 수정하지 않는다. 자체 리뷰에서 A→B 의존, import 재사용, 변경 경로와 고정 계약 준수를 확인한다.

A 구현 후 별도 자체 리뷰와 지정된 A 작업 검사 결과를 확인한 뒤 A PR을 병합한다. A 병합 전에는 B를 시작하지 않는다. B 구현 후 별도 자체 리뷰와 지정된 B 작업 검사 결과를 확인한 뒤 B PR을 병합한다. 이어 작업별 검사와 별도로 동일한 인자의 최종 목표 검사를 실행해 고정 테스트 6개 통과 및 skip 0개를 확인한다.

범위 위반이 발견되거나 지정 검사가 실패하면 해당 PR을 병합하지 않고 허용 파일에서 수정한 뒤 리뷰와 검사를 다시 수행한다. 최종 목표 검사가 실패하면 완료로 표시하지 않는다.
