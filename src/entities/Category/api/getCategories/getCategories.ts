import { instance } from '@/shared/lib/axios';

import { ENDPOINT_CATEGORIES } from '../../lib/endpoints';
import type { CategoryModel } from './getCategories.types';

export const getCategories = async () => {
  const { data } = await instance.get<CategoryModel>(ENDPOINT_CATEGORIES);

  return data;
};
