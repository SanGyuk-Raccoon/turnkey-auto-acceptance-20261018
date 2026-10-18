# Salute wrapper sample

Add the named ESM export `salute(value)` in `src/salute.js`. It must call the
existing named `greet` export once and return its result unchanged. Do not copy
normalization, guest selection, or greeting formatting into the wrapper.

| ID | Requirement |
| --- | --- |
| SAL-001 | The named salute(value) export delegates to the existing named greet export and returns its exact result unchanged. |
| SAL-002 | Non-string inputs propagate TypeError from greet without interception or conversion. |
| SAL-003 | Implementation changes are restricted to src/salute.js; existing source, tests, dependencies and configuration are preserved. |
| SAL-004 | All six existing tests and the three fixed salute tests pass with zero failures or skipped tests. |

## Technical design

The required named import is `import { greet } from './greeter.js'`. This locator
is an architectural binding. Do not silently substitute a different locator.
If the required existing module cannot be found, record the concrete design
conflict for clarification rather than creating another module or copying the
implementation. The behavior requirements above remain the source of truth.

## Verification

Run `node --test --test-reporter=tap test/normalize-name.test.js test/greeting.test.js test/salute.test.js`.
The fixed test files must not change. No network, installation, new dependency,
deployment, or main-branch write is needed.
