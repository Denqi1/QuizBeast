export const isArraysEqual = (firstArray: string[], secondArray: string[]) => {
  if (!firstArray.length && !secondArray.length) {
    return true;
  }

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const firstArrayMap = new Set<string>();

  for (const value of firstArray) {
    firstArrayMap.add(value);
  }

  for (const value of secondArray) {
    if (!firstArrayMap.has(value)) {
      return false;
    }
  }

  return true;
};
