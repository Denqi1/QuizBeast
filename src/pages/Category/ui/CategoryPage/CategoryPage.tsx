import { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { useAppStore } from '@/app/store';

import { CategoryList } from '../CategoryList';

export const CategoryPage = () => {
  const categories = useAppStore((state) => {
    return state.category.categories;
  });
  const isLoading = useAppStore((state) => {
    return state.category.isLoading;
  });
  const requestCategories = useAppStore((state) => {
    return state.category.requestCategories;
  });

  useEffect(() => {
    requestCategories();
  }, [requestCategories]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        height="100dvh"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="secondary" size={100} />
      </Box>
    );
  }

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
