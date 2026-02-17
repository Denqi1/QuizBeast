import { getQuestions, RequestQuestionsParams } from '@/entities/questions';

import type { ImmerStateCreator } from '../rootStore.types';
import { getCorrectAnswers } from './lib/getCorrectAnswers';
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
        set((state) => {
          state.game.questions = dataQuestions;
        });

        const correctAnswers = getCorrectAnswers(dataQuestions);
        set((state) => {
          state.game.correctAnswers = correctAnswers;
        });

        set((state) => {
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
