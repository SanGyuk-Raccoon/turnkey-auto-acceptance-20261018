import { normalizeName } from './normalize-name.js';

export function greet(value) {
  const name = normalizeName(value) || 'guest';
  return `Hello, ${name}!`;
}
