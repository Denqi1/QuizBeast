import type {
  QuestionModel,
  RequestQuestionsParams,
} from '@/entities/Question';

interface CorrectAnswers {
  [indexQuestion: number]: string[];
}

export interface GameSlice {
  questions: QuestionModel[];
  isLoading: boolean;
  isError: boolean;
  correctAnswers: CorrectAnswers;
  requestQuestions: (params: RequestQuestionsParams) => Promise<void>;
}
