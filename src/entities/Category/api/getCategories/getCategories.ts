import { instance } from '@/shared/lib/axios';

import type { CategoryModel } from './getCategories.types';

export const getCategories = async () => {
  const { data } = await instance.get<CategoryModel[]>('/categories');

  return data;
};
