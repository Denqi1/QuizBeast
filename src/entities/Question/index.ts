export { getQuestions, type RequestQuestionsParams } from './api/getQuestions';
export { getCorrectAnswers } from './lib/getCorrectAnswers';

export { LIMIT_QUESTIONS } from './model/config';
export type {
  QuestionModel,
  Difficulty,
  Answers,
  AnswersByQuestionId,
} from './model/types';
