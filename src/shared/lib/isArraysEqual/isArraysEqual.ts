/**
 * Почему-то это работает. Видимо примитивные данные приходят.
 *
 * TODO: Отрефакторить утилитку, чтобы сравнение шло не через приведение в строку,
 * а через глубокое сравнение.
 */
export const isArraysEqual = (
  firstArray: unknown[],
  secondArray: unknown[]
) => {
  return firstArray.toString() === secondArray.toString();
};
