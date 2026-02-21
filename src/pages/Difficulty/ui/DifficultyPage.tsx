import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

import { pathKeys } from '@/shared/lib/reactRouter';

const DIFFICULTY_LEVELS = [
  {
    level: 'easy',
    label: 'Easy',
    description: 'Warm up your brain',
    color: '#4caf50',
  },
  {
    level: 'medium',
    label: 'Medium',
    description: 'A solid challenge',
    color: '#FFA247',
  },
  {
    level: 'hard',
    label: 'Hard',
    description: 'Only for the brave',
    color: '#f44336',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const DifficultyPage = () => {
  const { categoryName } = useParams();

  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100dvh"
      alignItems="center"
      flexDirection="column"
      position="relative"
      px={3}
      py={8}
    >
      <Box position="absolute" top={24} left={24}>
        <Link to={pathKeys.category()} style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:hover': { color: '#fff' },
            }}
          >
            ← Categories
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
          How tough can you go?
        </Typography>

        <Typography
          variant="h6"
          fontWeight={400}
          textAlign="center"
          color="rgba(255, 255, 255, 0.6)"
          mb={6}
          sx={{ textTransform: 'capitalize' }}
        >
          Category: {categoryName}
        </Typography>
      </motion.div>

      <Box
        display="flex"
        gap={3}
        flexWrap="wrap"
        justifyContent="center"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {DIFFICULTY_LEVELS.map(({ level, label, description, color }) => {
          return (
            <motion.div
              key={level}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={pathKeys.game(categoryName, level)}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  width={200}
                  py={4}
                  px={3}
                  borderRadius={3}
                  textAlign="center"
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      borderColor: color,
                      boxShadow: `0 4px 24px ${color}30`,
                    },
                  }}
                >
                  <Typography
                    fontSize="1.4rem"
                    fontWeight={700}
                    color={color}
                    mb={1}
                  >
                    {label}
                  </Typography>

                  <Typography
                    fontSize="0.85rem"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    {description}
                  </Typography>
                </Box>
              </Link>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
