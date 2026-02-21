import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAnswersSlice } from './answers';
import { createCategorySlice } from './category';
import { createGameSlice } from './game';
import type { AppStore } from './rootStore.types';

export const useAppStore = create<AppStore>()(
  immer(
    devtools(
      (...args) => {
        return {
          game: createGameSlice(...args),
          answers: createAnswersSlice(...args),
          category: createCategorySlice(...args),
        };
      },
      { name: 'app-storage' }
    )
  )
);
