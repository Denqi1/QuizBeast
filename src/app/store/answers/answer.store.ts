import { ImmerStateCreator } from '../store.types';

export type AnswersSlice = {
  checkedAnswers: string[];
  numberOfAnswers: number;
  userAnswers: CorrectAnswers;
  clearCheckedAnswers: () => void;
  toggleAnswer: (_userAnswer: string) => void;
  increaseNumberOfAnswers: () => void;
  updateUserAnswers: (_answers: string[], _indexQuestion: number) => void;
  clearNumberOfAnswers: () => void;
};

type CorrectAnswers = { [indexQuestion: number]: string[] };

export const createAnswersSlice: ImmerStateCreator<AnswersSlice> = (
  set,
  get
) => ({
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
});
