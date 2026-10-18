# 요구사항 및 수용 기준

| ID | Requirement |
| --- | --- |
| REQ-001 | A: `src/normalize-name.js`가 named export `normalizeName(value)`를 제공한다. 문자열만 허용하고 그 외 입력은 `TypeError`를 던지며, 문자열의 앞뒤 공백을 trim한 뒤 Unicode NFC로 정규화해 반환한다. 정규화 결과가 빈 문자열이면 빈 문자열을 반환한다. |
| REQ-002 | A의 고정 입력 3개: `normalizeName('  Ada  ') === 'Ada'`; U+0065 뒤에 U+0301이 오는 실제 문자열을 입력하면 `'é'`를 반환한다; `normalizeName(42)`는 `TypeError`를 던진다. |
| REQ-003 | B: A가 병합된 뒤 `src/greeting.js`가 named export `greet(value)`를 제공한다. `normalizeName`을 import하여 반드시 재사용하고, 정규화된 이름이 비면 `guest`를 사용해 정확히 `Hello, NAME!` 형식으로 반환한다. |
| REQ-004 | B의 고정 입력 3개: `greet('  Ada  ') === 'Hello, Ada!'`; `greet('   ') === 'Hello, guest!'`; U+0065 뒤에 U+0301이 오는 실제 문자열을 입력하면 `'Hello, é!'`를 반환한다. |
| REQ-005 | A 작업 검사는 `node --test --test-reporter=tap test/normalize-name.test.js`를 실행한다. |
| REQ-006 | B 작업 검사는 A의 동작을 보존하며 `node --test --test-reporter=tap test/normalize-name.test.js test/greeting.test.js`를 실행한다. |
| REQ-007 | 최종 목표 검사는 작업별 검사와 별도로 `node --test --test-reporter=tap test/normalize-name.test.js test/greeting.test.js`를 실행하고, 고정 테스트 합계 6개가 skip 없이 통과했음을 확인한다. |

## 제약
- 계획은 정확히 두 의존 작업 A→B로 구성하며, B는 A 병합 후 진행한다.
- 구현 허용 경로는 A에서 `src/normalize-name.js` 하나, B에서 `src/greeting.js` 하나다. 고정 검사, `package.json`, lockfile은 변경하지 않는다.
- Node 24.20.0, pnpm 11.23.0, ESM을 사용하며 외부 의존성을 추가하지 않는다.

위 검사는 수용 기준이며, 실행 또는 통과를 주장하지 않는다.
