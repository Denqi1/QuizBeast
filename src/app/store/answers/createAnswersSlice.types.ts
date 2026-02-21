import type { AnswersByQuestionId } from '@/entities/Question';

export interface AnswersSlice {
  checkedAnswers: string[];
  currentQuestionIndex: number;
  userAnswers: AnswersByQuestionId;
  clearCheckedAnswers: () => void;
  toggleAnswer: (userAnswer: string) => void;
  incrementQuestionIndex: () => void;
  updateUserAnswers: (answers: string[], questionId: number) => void;
  resetQuestionIndex: () => void;
}
