import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Grid, Typography } from '@mui/material';

import { pathKeys } from '@/shared/lib/reactRouter';

import { CategoryListProps } from './CategoryList.types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const CategoryList = (props: CategoryListProps) => {
  const { categories } = props;

  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      maxWidth={800}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => {
        const { id, name } = category;

        return (
          <Grid item xs={4} sm={4} md={4} key={id}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Link
                to={pathKeys.difficulty(name)}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  py={3}
                  px={2}
                  borderRadius={3}
                  textAlign="center"
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      borderColor: 'rgba(255, 162, 71, 0.5)',
                      boxShadow: '0 4px 24px rgba(255, 162, 71, 0.15)',
                    },
                  }}
                >
                  <Typography
                    fontSize="1rem"
                    fontWeight={600}
                    color="#fff"
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {name}
                  </Typography>
                </Box>
              </Link>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};
