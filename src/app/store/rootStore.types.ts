import type { StateCreator } from 'zustand';

import type { AnswersSlice } from './answers';
import type { CategorySlice } from './category';
import type { GameSlice } from './game';

export interface AppStore {
  game: GameSlice;
  answers: AnswersSlice;
  category: CategorySlice;
}

export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never]],
  [],
  T
>;
