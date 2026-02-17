import type {
  QuestionModel,
  RequestQuestionsParams,
} from '@/entities/questions';

interface CorrectAnswers {
  [indexQuestion: number]: string[];
}

export interface GameSlice {
  questions: QuestionModel[];
  isLoading: boolean;
  isError: boolean;
  correctAnswers: CorrectAnswers;
  requestQuestions: (_params: RequestQuestionsParams) => Promise<void>;
}
