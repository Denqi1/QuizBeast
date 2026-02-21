import type {
  QuestionModel,
  RequestQuestionsParams,
  AnswersByQuestionId,
} from '@/entities/Question';

export interface GameSlice {
  questions: QuestionModel[];
  isLoading: boolean;
  isError: boolean;
  correctAnswers: AnswersByQuestionId;
  requestQuestions: (params: RequestQuestionsParams) => Promise<void>;
}
