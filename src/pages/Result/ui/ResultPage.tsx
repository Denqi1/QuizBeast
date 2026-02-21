import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';

import { useAppStore } from '@/app/store';

import { pathKeys } from '@/shared/lib/reactRouter';
import { isArraysEqual } from '@/shared/lib/isArraysEqual';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * index, duration: 0.4, ease: 'easeOut' },
    };
  },
};

export const ResultPage = () => {
  const userAnswers = useAppStore((state) => {
    return state.answers.userAnswers;
  });
  const correctAnswers = useAppStore((state) => {
    return state.game.correctAnswers;
  });
  const questions = useAppStore((state) => {
    return state.game.questions;
  });

  const totalCorrect = questions.filter((question) => {
    return isArraysEqual(userAnswers[question.id], correctAnswers[question.id]);
  }).length;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100dvh"
      px={{ xs: 2, md: 4 }}
      py={6}
      maxWidth={800}
      mx="auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Typography variant="h3" fontWeight={700} color="#fff" mb={1}>
          Your Results
        </Typography>

        <Typography
          fontSize="3.5rem"
          fontWeight={900}
          color="#FFA247"
          lineHeight={1.2}
          mb={1}
        >
          {totalCorrect} / {questions.length}
        </Typography>

        <Typography fontSize="1rem" color="rgba(255,255,255,0.5)" mb={5}>
          {totalCorrect === questions.length
            ? 'Perfect score! You nailed it!'
            : totalCorrect >= questions.length / 2
              ? 'Good job! Keep practicing!'
              : "Don't give up! Try again!"}
        </Typography>
      </motion.div>

      {questions.map((question, index) => {
        const { id, question: questionText } = question;
        const isCorrect = isArraysEqual(userAnswers[id], correctAnswers[id]);

        return (
          <motion.div
            key={id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            <Box
              mb={3}
              p={3}
              borderRadius={3}
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                border: isCorrect
                  ? '1px solid rgba(76, 175, 80, 0.4)'
                  : '1px solid rgba(244, 67, 54, 0.4)',
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                mb={2}
              >
                <Typography
                  fontSize="1rem"
                  fontWeight={600}
                  color="#FFA247"
                  flex={1}
                  mr={2}
                >
                  {questionText}
                </Typography>

                <Chip
                  label={isCorrect ? 'Correct' : 'Wrong'}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: isCorrect
                      ? 'rgba(76, 175, 80, 0.2)'
                      : 'rgba(244, 67, 54, 0.2)',
                    color: isCorrect ? '#4caf50' : '#f44336',
                    border: `1px solid ${isCorrect ? 'rgba(76, 175, 80, 0.4)' : 'rgba(244, 67, 54, 0.4)'}`,
                  }}
                />
              </Box>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 2 }} />

              <Box display="flex" gap={3} flexWrap="wrap">
                <Box flex={1} minWidth={200}>
                  <Typography
                    fontSize="0.75rem"
                    fontWeight={600}
                    color="rgba(255,255,255,0.4)"
                    textTransform="uppercase"
                    letterSpacing={1}
                    mb={1}
                  >
                    Your answers
                  </Typography>

                  {userAnswers[id].map((answer) => {
                    return (
                      <Typography
                        key={answer}
                        fontSize="0.9rem"
                        color="rgba(255,255,255,0.8)"
                        mb={0.5}
                      >
                        • {answer}
                      </Typography>
                    );
                  })}
                </Box>

                <Box flex={1} minWidth={200}>
                  <Typography
                    fontSize="0.75rem"
                    fontWeight={600}
                    color="rgba(255,255,255,0.4)"
                    textTransform="uppercase"
                    letterSpacing={1}
                    mb={1}
                  >
                    Correct answers
                  </Typography>

                  {correctAnswers[id].map((answer) => {
                    return (
                      <Typography
                        key={answer}
                        fontSize="0.9rem"
                        color="#4caf50"
                        mb={0.5}
                      >
                        • {answer}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 * questions.length + 0.2, duration: 0.5 }}
      >
        <Box display="flex" gap={3} mt={3} mb={4}>
          <Link to={pathKeys.category()} style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(255,255,255,0.2)',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: '#fff',
                },
              }}
            >
              Play again
            </Button>
          </Link>

          <Link to={pathKeys.home()} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4, py: 1.5, fontWeight: 700, borderRadius: 2 }}
            >
              Home
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
};
