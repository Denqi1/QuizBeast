import { getCategories } from '@/entities/Category';

import type { ImmerStateCreator } from '../rootStore.types';
import type { CategorySlice } from './createCategorySlice.types';

export const createCategorySlice: ImmerStateCreator<CategorySlice> = (
  set
): CategorySlice => {
  return {
    categories: [],
    isLoading: true,
    isError: false,
    requestCategories: async () => {
      set((state) => {
        state.category.isLoading = true;
      });

      try {
        const data = await getCategories();

        set((state) => {
          state.category.categories = data;
          state.category.isError = false;
        });
      } catch (error) {
        set((state) => {
          state.category.isError = true;
        });
      }

      set((state) => {
        state.category.isLoading = false;
      });
    },
  };
};
