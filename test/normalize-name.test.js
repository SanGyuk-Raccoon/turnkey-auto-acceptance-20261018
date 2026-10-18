import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeName} from '../src/normalize-name.js';
test('trim boundary whitespace',()=>assert.equal(normalizeName('  Ada  '),'Ada'));
test('normalize Unicode NFC',()=>assert.equal(normalizeName('e\u0301'),'é'));
test('reject non-string input',()=>assert.throws(()=>normalizeName(42),TypeError));
