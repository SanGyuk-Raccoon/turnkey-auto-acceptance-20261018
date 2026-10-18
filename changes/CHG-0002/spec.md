# 요구사항 및 수용 기준

| ID | Requirement |
| --- | --- |
| SAL-001 | The named salute(value) export delegates to the existing named greet export and returns its exact result unchanged. |
| SAL-002 | Non-string inputs propagate TypeError from greet without interception or conversion. |
| SAL-003 | Implementation changes are restricted to src/salute.js; existing source, tests, dependencies and configuration are preserved. |
| SAL-004 | All six existing tests and the three fixed salute tests pass with zero failures or skipped tests. |

## 확인된 수용 기준
- `salute(value)`는 기존 named `greet`를 정확히 한 번 호출한다. 정규화, `guest` 선택, 인사말 형식을 wrapper에 복제하지 않는다.
- 고정 `test/salute.test.js`의 공백 포함 이름, 공백만 있는 이름, `null` 입력 검사를 변경하지 않고 통과한다.
- 검증 명령은 `node --test --test-reporter=tap test/normalize-name.test.js test/greeting.test.js test/salute.test.js`이며, 기대 결과는 총 9개 통과, 0개 실패, 0개 skip이다.

## 제약
- 구현 허용 파일은 `src/salute.js` 하나다. 기존 코드·검사·설정·package/lockfile을 변경하지 않는다.
- 설계의 고정 모듈 참조는 동작 요구사항과 구분되는 architectural binding이며 임의로 대체하지 않는다. 실제 저장소에서 충족할 수 없으면 구체적 근거를 제시하고 설계 보완을 요청한다.

검사는 수용 기준이며, 실행 또는 통과를 주장하지 않는다.
