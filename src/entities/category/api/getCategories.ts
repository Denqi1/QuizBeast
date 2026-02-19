import { instance } from '@/shared/lib/axios';

import { ENDPOINT_CATEGORIES } from '../lib/constants';
import { CategoryModel } from './getCategories.types';

export async function getCategories() {
  const { data } = await instance.get<CategoryModel[]>(ENDPOINT_CATEGORIES);

  return data;
}
