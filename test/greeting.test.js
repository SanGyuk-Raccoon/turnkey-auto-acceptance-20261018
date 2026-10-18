import {test} from 'node:test';
import assert from 'node:assert/strict';
import {greet} from '../src/greeting.js';
test('greet normalized name',()=>assert.equal(greet('  Ada  '),'Hello, Ada!'));
test('empty normalized name uses guest',()=>assert.equal(greet('   '),'Hello, guest!'));
test('reuse NFC normalization',()=>assert.equal(greet('e\u0301'),'Hello, é!'));
