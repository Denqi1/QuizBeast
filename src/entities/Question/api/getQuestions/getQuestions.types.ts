import type { Difficulty } from '../../model/types';

export interface RequestQuestionsParams {
  category: string | undefined;
  difficulty: Difficulty | undefined;
  limit?: number;
}
