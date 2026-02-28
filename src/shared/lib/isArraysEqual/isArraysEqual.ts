export const isArraysEqual = (firstArray: string[], secondArray: string[]) => {
  if (!firstArray.length && !secondArray.length) {
    return true;
  }

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const firstArraySorted = firstArray.sort();
  const secondArraySorted = secondArray.sort();

  for (const index in firstArraySorted) {
    if (firstArraySorted[index] !== secondArraySorted[index]) {
      return false;
    }
  }

  return true;
};
