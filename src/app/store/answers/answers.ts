import type { ImmerStateCreator } from '../store.types';
import type { AnswersSlice } from './answers.types';

export const createAnswersSlice: ImmerStateCreator<AnswersSlice> = (
  set,
  get
): AnswersSlice => {
  return {
    checkedAnswers: [],
    numberOfAnswers: 0,
    userAnswers: {},
    clearCheckedAnswers: () => {
      set((state) => {
        state.answers.checkedAnswers = [];
      });
    },
    toggleAnswer: (userAnswer: string) => {
      const checkedAnswers = get().answers.checkedAnswers;

      if (checkedAnswers.includes(userAnswer)) {
        const indexChecked = checkedAnswers.indexOf(userAnswer);
        set((state) => {
          state.answers.checkedAnswers.splice(indexChecked, 1);
        });
      } else if (!checkedAnswers.includes(userAnswer)) {
        set((state) => {
          state.answers.checkedAnswers.push(userAnswer);
        });
      }
    },
    increaseNumberOfAnswers() {
      set((state) => {
        ++state.answers.numberOfAnswers;
      });
    },
    clearNumberOfAnswers() {
      set((state) => {
        state.answers.numberOfAnswers = 0;
      });
    },
    updateUserAnswers: (answers, idQuestion) => {
      set((state) => {
        state.answers.userAnswers[idQuestion] = answers;
      });
    },
  };
};
