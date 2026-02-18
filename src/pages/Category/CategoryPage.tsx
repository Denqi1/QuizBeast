import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { CategoryModel, getCategories } from '@/entities/Category';

import { CategoryList } from './ui/CategoryList';

export const CategoryPage = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    const makeRequest = async () => {
      const dataList = await getCategories();

      setCategories(dataList);
    };

    makeRequest();
  }, []);

  return (
    <Box
      maxWidth={644}
      display="flex"
      justifyContent="center"
      alignItems="center"
      m="0px auto"
      height="100dvh"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: 'easeIn' }}
      >
        <Typography variant="h5">
          Hi! what topic are you interested in?
        </Typography>
      </motion.div>

      <CategoryList categories={categories} />
    </Box>
  );
};
