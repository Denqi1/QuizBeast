import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { useAppStore } from '@/app/store';

import { Difficulty, limitQuestions } from '@/entities/Question';

import { AnswerList } from '@/widgets/answer';

import { NextQuestionButton } from '@/features/answer';

import { pathKeys } from '@/shared/lib/react-router';

export function GamePage() {
  const numberOfAnswers = useAppStore((state) => state.answers.numberOfAnswers);
  const questions = useAppStore((state) => state.game.questions);
  const requestQuestions = useAppStore((state) => state.game.requestQuestions);
  const clearNumberOfAnswers = useAppStore(
    (state) => state.answers.clearNumberOfAnswers
  );
  const checkedAnswers = useAppStore((state) => state.answers.checkedAnswers);
  const clearCheckedAnswers = useAppStore(
    (state) => state.answers.clearCheckedAnswers
  );
  const updateUserAnswers = useAppStore(
    (state) => state.answers.updateUserAnswers
  );
  const isLoading = useAppStore((state) => state.game.isLoading);
  const isError = useAppStore((state) => state.game.isError);

  const { categoryName, difficultyLevel } = useParams<{
    categoryName: string | undefined;
    difficultyLevel: Difficulty | undefined;
  }>();

  useEffect(() => {
    (async () => {
      await requestQuestions({
        category: categoryName,
        difficulty: difficultyLevel,
        limit: limitQuestions,
      });
    })();
  }, [categoryName, difficultyLevel, requestQuestions]);

  const handleResult = () => {
    updateUserAnswers(checkedAnswers, questions[numberOfAnswers].id);
    clearCheckedAnswers();
    clearNumberOfAnswers();
  };

  const button =
    // If the current number of answers does not exceed the maximum
    numberOfAnswers < questions.length - 1 ? (
      <NextQuestionButton questionId={questions[numberOfAnswers].id} />
    ) : (
      <Link to={pathKeys.result}>
        <Button onClick={handleResult} variant="contained" color="secondary">
          Find out the result
        </Button>
      </Link>
    );

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
          No questions were found for this category and complexity 😥
        </Typography>

        <Typography variant="h6">
          Please select a different difficulty or category
        </Typography>
      </Box>
    );
  }

  return (
    <Box m="0px 20px">
      <Box p="90px 46px" m="50px 100px" textAlign="center" bgcolor="#42067d">
        <Typography fontSize="36px" color="#FFA247">
          {questions[numberOfAnswers]?.question}
        </Typography>
      </Box>
      <AnswerList answers={questions[numberOfAnswers]?.answers} />
      <Box textAlign="center">{button}</Box>
    </Box>
  );
}
