import { ImmerStateCreator } from '../store.types';
import { getCorrectAnswers } from './game.lib';
import {
  getQuestions,
  QuestionModel,
  RequestQuestionsParams,
} from '@/entities/questions';

export type GameSlice = {
  questions: QuestionModel[];
  isLoading: boolean;
  isError: boolean;
  correctAnswers: CorrectAnswers;
  requestQuestions: (_params: RequestQuestionsParams) => Promise<void>;
};

type CorrectAnswers = { [indexQuestion: number]: string[] };

export const createGameSlice: ImmerStateCreator<GameSlice> = (set) => ({
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
});
