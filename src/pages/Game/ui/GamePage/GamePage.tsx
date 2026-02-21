import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@mui/material';

import { pathKeys } from '@/shared/lib/reactRouter';

import { useGamePage } from '../../model/useGamePage';
import { AnswersList } from '../AnswersList';

export const GamePage = () => {
  const {
    isLoading,
    isError,
    isNoQuestionsFound,
    currentQuestionIndex,
    questions,
    goToNextQuestion,
    submitFinalAnswer,
    checkedAnswers,
    toggleAnswer,
    categoryName,
    difficultyLevel,
  } = useGamePage();

  const handleFinalAnswerSubmit = () => {
    submitFinalAnswer();
  };

  const handleSwitchQuestionClick = () => {
    goToNextQuestion();
  };

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

  if (isError) {
    return (
      <Box
        textAlign="center"
        height="100dvh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={3}
      >
        <Typography variant="h4" color="#fff" mb={1}>
          Something went wrong 😥
        </Typography>

        <Typography variant="h6" color="rgba(255,255,255,0.6)" mb={4}>
          Please try again later
        </Typography>

        <Link
          to={pathKeys.difficulty(categoryName)}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="secondary" size="large">
            Go back
          </Button>
        </Link>
      </Box>
    );
  }

  if (isNoQuestionsFound) {
    return (
      <Box
        textAlign="center"
        height="100dvh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={3}
      >
        <Typography variant="h4" color="#fff" mb={1}>
          No questions found 😥
        </Typography>

        <Typography variant="h6" color="rgba(255,255,255,0.6)" mb={4}>
          Try a different difficulty or category
        </Typography>

        <Link
          to={pathKeys.difficulty(categoryName)}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="secondary" size="large">
            Change difficulty
          </Button>
        </Link>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex >= questions.length - 1;
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100dvh"
      px={{ xs: 2, md: 6 }}
      py={4}
      maxWidth={900}
      mx="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography fontSize="0.85rem" color="rgba(255,255,255,0.5)">
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>

        <Typography
          fontSize="0.85rem"
          color="rgba(255,255,255,0.5)"
          sx={{ textTransform: 'capitalize' }}
        >
          {categoryName} · {difficultyLevel}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progressPercent}
        color="secondary"
        sx={{
          height: 6,
          borderRadius: 3,
          mb: 5,
          backgroundColor: 'rgba(255,255,255,0.08)',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Box
            py={5}
            px={4}
            mb={5}
            borderRadius={3}
            textAlign="center"
            sx={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Typography
              fontSize={{ xs: '1.3rem', md: '1.6rem' }}
              fontWeight={600}
              color="#FFA247"
              lineHeight={1.4}
            >
              {currentQuestion?.question}
            </Typography>
          </Box>

          <AnswersList
            answers={currentQuestion?.answers}
            checkedAnswers={checkedAnswers}
            onAnswerToggle={toggleAnswer}
          />
        </motion.div>
      </AnimatePresence>

      <Box textAlign="center" mt="auto" pb={2}>
        {isLastQuestion ? (
          <Link
            to={pathKeys.result(categoryName, difficultyLevel)}
            style={{ textDecoration: 'none' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleFinalAnswerSubmit}
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: '0 8px 30px rgba(255, 162, 71, 0.35)',
                }}
              >
                See results
              </Button>
            </motion.div>
          </Link>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleSwitchQuestionClick}
              sx={{ px: 5, py: 1.5, fontWeight: 700, borderRadius: 2 }}
            >
              Next question
            </Button>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};
