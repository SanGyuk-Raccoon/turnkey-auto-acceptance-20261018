export function normalizeName(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Name must be a string');
  }

  return value.trim().normalize('NFC');
}
