import type { ImmerStateCreator } from '../rootStore.types';
import type { AnswersSlice } from './createAnswersSlice.types';

export const createAnswersSlice: ImmerStateCreator<AnswersSlice> = (
  set,
  get
): AnswersSlice => {
  return {
    checkedAnswers: [],
    currentQuestionIndex: 0,
    userAnswers: {},
    clearCheckedAnswers: () => {
      set((state) => {
        state.answers.checkedAnswers = [];
      });
    },
    toggleAnswer: (userAnswer: string) => {
      const checkedAnswers = get().answers.checkedAnswers;

      if (!checkedAnswers.includes(userAnswer)) {
        set((state) => {
          state.answers.checkedAnswers.push(userAnswer);
        });

        return;
      }

      const indexChecked = checkedAnswers.indexOf(userAnswer);

      set((state) => {
        state.answers.checkedAnswers.splice(indexChecked, 1);
      });
    },
    incrementQuestionIndex() {
      set((state) => {
        ++state.answers.currentQuestionIndex;
      });
    },
    resetQuestionIndex() {
      set((state) => {
        state.answers.currentQuestionIndex = 0;
      });
    },
    updateUserAnswers: (answers, questionId) => {
      set((state) => {
        state.answers.userAnswers[questionId] = answers;
      });
    },
  };
};
