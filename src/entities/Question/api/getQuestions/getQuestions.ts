import { instance } from '@/shared/lib/axios';

import { ENDPOINT_QUESTIONS } from '../../lib/endpoints';
import type { QuestionModel } from '../../model/types';
import type { RequestQuestionsParams } from './getQuestions.types';

const requestQuestions = (params: RequestQuestionsParams) => {
  const { category, difficulty, limit } = params;

  const config = {
    params: {
      limit,
      category,
      difficulty,
    },
  };

  return instance.get<QuestionModel[]>(ENDPOINT_QUESTIONS, config);
};

export const getQuestions = async (params: RequestQuestionsParams) => {
  const { data } = await requestQuestions(params);

  return data;
};
