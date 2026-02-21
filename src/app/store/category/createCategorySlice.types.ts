import type { CategoryModel } from '@/entities/Category';

export interface CategorySlice {
  categories: CategoryModel[];
  isLoading: boolean;
  isError: boolean;
  requestCategories: () => Promise<void>;
}
