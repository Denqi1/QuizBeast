import {
  getQuestions,
  getCorrectAnswers,
  RequestQuestionsParams,
} from '@/entities/Question';

import type { ImmerStateCreator } from '../rootStore.types';
import type { GameSlice } from './createGameSlice.types';

export const createGameSlice: ImmerStateCreator<GameSlice> = (
  set
): GameSlice => {
  return {
    questions: [],
    correctAnswers: {},
    isLoading: true,
    isError: false,
    requestQuestions: async (params: RequestQuestionsParams) => {
      set((state) => {
        state.game.isLoading = true;
      });

      try {
        const dataQuestions = await getQuestions({ ...params });

        const correctAnswers = getCorrectAnswers(dataQuestions);

        set((state) => {
          state.game.questions = dataQuestions;
          state.game.correctAnswers = correctAnswers;
          state.game.isError = false;
        });
      } catch (error) {
        set((state) => {
          state.game.isError = true;
        });
      }

      set((state) => {
        state.game.isLoading = false;
      });
    },
  };
};
