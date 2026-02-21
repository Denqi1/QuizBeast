import type { AnswersByQuestionId, QuestionModel } from '../model/types';

export const getCorrectAnswers = (
  questions: QuestionModel[]
): AnswersByQuestionId => {
  return questions.reduce<AnswersByQuestionId>((obj, question) => {
    const result: string[] = [];

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
};
