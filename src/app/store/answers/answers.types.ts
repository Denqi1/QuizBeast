interface CorrectAnswers {
  [indexQuestion: number]: string[];
}

export interface AnswersSlice {
  checkedAnswers: string[];
  numberOfAnswers: number;
  userAnswers: CorrectAnswers;
  clearCheckedAnswers: () => void;
  toggleAnswer: (userAnswer: string) => void;
  increaseNumberOfAnswers: () => void;
  updateUserAnswers: (answers: string[], indexQuestion: number) => void;
  clearNumberOfAnswers: () => void;
}
