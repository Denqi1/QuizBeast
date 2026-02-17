import { QuestionModel } from '@/entities/questions';

export const getCorrectAnswers = (questions: QuestionModel[]) => {
  const correctAnswers = questions.reduce((obj, question) => {
    const result: string[] | null = [];

    for (const [key, value] of Object.entries(question.correct_answers)) {
      if (value === 'true') {
        const indexCorrectAnswer = Object.keys(
          question.correct_answers
        ).indexOf(key);

        result.push(Object.values(question.answers)[indexCorrectAnswer]!);
      }
    }

    return {
      ...obj,
      [question.id]: result,
    };
  }, {});

  return correctAnswers;
};
