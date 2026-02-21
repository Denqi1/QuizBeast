import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { useAppStore } from '@/app/store';
import { pathKeys } from '@/shared/lib/reactRouter';

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
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100dvh"
      px={3}
      py={8}
      position="relative"
    >
      <Box position="absolute" top={24} left={24}>
        <Link to={pathKeys.home()} style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:hover': { color: '#fff' },
            }}
          >
            ← Home
          </Button>
        </Link>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          color="#fff"
          mb={1}
        >
          Choose a topic
        </Typography>

        <Typography
          variant="h6"
          fontWeight={400}
          textAlign="center"
          color="rgba(255, 255, 255, 0.6)"
          mb={6}
        >
          What do you want to be quizzed on?
        </Typography>
      </motion.div>

      <CategoryList categories={categories} />
    </Box>
  );
};
