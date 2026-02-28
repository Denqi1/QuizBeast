import { expect, test } from 'vitest';
import { isArraysEqual } from './isArraysEqual';

test('returns true for two empty arrays', () => {
  expect(isArraysEqual([], [])).toBe(true);
});

test('returns true for arrays with identical strings', () => {
  expect(isArraysEqual(['a'], ['a'])).toBe(true);
});

test('returns true for two arrays with different order but identical values', () => {
  expect(isArraysEqual(['a', 'b'], ['b', 'a'])).toBe(true);
});

test('returns false for two arrays with different strings', () => {
  expect(isArraysEqual(['a'], ['b'])).toBe(false);
});

test('returns true when duplicates count matches', () => {
  expect(isArraysEqual(['a', 'a'], ['a', 'a'])).toBe(true);
});

test('returns false when duplicates count differs', () => {
  expect(isArraysEqual(['a', 'a'], ['a', 'b'])).toBe(false);
});

test('returns false if the duplicates are different.', () => {
  expect(isArraysEqual(['a', 'a', 'b'], ['a', 'b', 'b'])).toBe(false);
});
