import assert from 'node:assert/strict';
import test from 'node:test';
import { salute } from '../src/salute.js';

test('salute delegates the normalized greeting', () => {
  assert.equal(salute('  Ada  '), 'Hello, Ada!');
});

test('salute preserves the guest greeting', () => {
  assert.equal(salute('   '), 'Hello, guest!');
});

test('salute propagates TypeError from the existing greeting', () => {
  assert.throws(() => salute(null), TypeError);
});
