import { expect, test } from 'vitest';
import { isArraysEqual } from './isArraysEqual';

test('returns true for two empty arrays', () => {
  expect(isArraysEqual([], [])).toBe(true);
});

test('returns true for arrays with identical strings', () => {
  expect(isArraysEqual(['javascript'], ['javascript'])).toBe(true);
});

test('returns true for two arrays with different order but identical values', () => {
  expect(
    isArraysEqual(['javascript', 'typescript'], ['typescript', 'javascript'])
  ).toBe(true);
});

test('returns false for two arrays with different strings', () => {
  expect(isArraysEqual(['javascript'], ['typescript'])).toBe(false);
});

test('returns true when duplicates count matches', () => {
  expect(
    isArraysEqual(['javascript', 'javascript'], ['javascript', 'javascript'])
  ).toBe(true);
});

test('returns false when duplicates count differs', () => {
  expect(
    isArraysEqual(['javascript', 'javascript'], ['javascript', 'typescript'])
  ).toBe(false);
});
