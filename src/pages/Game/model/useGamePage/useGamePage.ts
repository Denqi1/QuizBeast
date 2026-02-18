import { useAppStore } from '@/app/store';
import { Difficulty, limitQuestions } from '@/entities/Question';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useGamePage = () => {
  const numberOfAnswers = useAppStore((state) => {
    return state.answers.numberOfAnswers;
  });
  const questions = useAppStore((state) => {
    return state.game.questions;
  });
  const requestQuestions = useAppStore((state) => {
    return state.game.requestQuestions;
  });
  const clearNumberOfAnswers = useAppStore((state) => {
    return state.answers.clearNumberOfAnswers;
  });
  const checkedAnswers = useAppStore((state) => {
    return state.answers.checkedAnswers;
  });
  const clearCheckedAnswers = useAppStore((state) => {
    return state.answers.clearCheckedAnswers;
  });
  const updateUserAnswers = useAppStore((state) => {
    return state.answers.updateUserAnswers;
  });
  const isPageLoading = useAppStore((state) => {
    return state.game.isLoading;
  });
  const isNoQuestionsFound = useAppStore((state) => {
    return state.game.isError;
  });
  const increaseNumberOfAnswers = useAppStore((state) => {
    return state.answers.increaseNumberOfAnswers;
  });
  const toggleAnswer = useAppStore((state) => {
    return state.answers.toggleAnswer;
  });

  const submitFinalAnswer = () => {
    updateUserAnswers(checkedAnswers, questions[numberOfAnswers].id);
    clearCheckedAnswers();
    clearNumberOfAnswers();
  };

  const goToNextQuestion = () => {
    increaseNumberOfAnswers();
    updateUserAnswers(checkedAnswers, questions[numberOfAnswers].id);
    clearCheckedAnswers();
  };

  const { categoryName, difficultyLevel } = useParams<{
    categoryName: string | undefined;
    difficultyLevel: Difficulty | undefined;
  }>();

  useEffect(() => {
    requestQuestions({
      category: categoryName,
      difficulty: difficultyLevel,
      limit: limitQuestions,
    });
  }, [categoryName, difficultyLevel, requestQuestions]);

  return {
    submitFinalAnswer,
    goToNextQuestion,
    isPageLoading,
    isNoQuestionsFound,
    numberOfAnswers,
    questions,
    checkedAnswers,
    toggleAnswer,
  };
};
