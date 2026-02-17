import type { StateCreator } from 'zustand';

import type { AnswersSlice } from './answers';
import type { GameSlice } from './game';

export interface AppStore {
  game: GameSlice;
  answers: AnswersSlice;
}

export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never]],
  [],
  T
>;
