import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

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
      >
        <Typography variant="h4" mb={1}>
          Something went wrong 😥
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
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
      >
        <Typography variant="h4" mb={1}>
          No questions were found for this category and complexity 😥
        </Typography>

        <Typography variant="h6">
          Please select a different difficulty or category
        </Typography>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isWithinMaxAnswers = currentQuestionIndex < questions.length - 1;

  return (
    <Box m="0px 20px">
      <Box p="90px 46px" m="50px 100px" textAlign="center" bgcolor="#42067d">
        <Typography fontSize="36px" color="#FFA247">
          {currentQuestion?.question}
        </Typography>
      </Box>

      <AnswersList
        answers={currentQuestion?.answers}
        checkedAnswers={checkedAnswers}
        onAnswerToggle={toggleAnswer}
      />

      <Box textAlign="center">
        {isWithinMaxAnswers ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSwitchQuestionClick}
          >
            Next question
          </Button>
        ) : (
          <Link to={pathKeys.result(categoryName, difficultyLevel)}>
            <Button
              onClick={handleFinalAnswerSubmit}
              variant="contained"
              color="secondary"
            >
              Find out the result
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};
