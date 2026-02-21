import { Answers } from '@/entities/Question';

export interface AnswersListProps {
  answers: Answers;
  checkedAnswers: string[];
  onAnswerToggle: (userAnswer: string) => void;
}
