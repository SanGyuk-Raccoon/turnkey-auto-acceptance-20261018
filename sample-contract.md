# Public acceptance sample

This is synthetic test data, not Turnkey source code.

A. Implement named export `normalizeName(value)` in `src/normalize-name.js`: accept only strings (otherwise throw TypeError), trim boundary whitespace and normalize Unicode NFC. Do not change fixed tests.

B. After A merges, implement named export `greet(value)` in `src/greeting.js`: import and reuse normalizeName; return `Hello, NAME!`, using `guest` for an empty normalized name. Preserve A. Do not change fixed tests.

Plan exactly two dependent Issue tasks A then B. Allowed implementation paths are the two src files above, one per task. A runs `node --test --test-reporter=tap test/normalize-name.test.js`. B runs `node --test --test-reporter=tap test/normalize-name.test.js test/greeting.test.js`. Final goal checks must cover all six assertions without skipped tests. No external packages, network access, deployments or credentials are needed in the sample.
