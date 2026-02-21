import { Grid } from '@mui/material';

import { ToggleAnswerButton } from '../ToggleAnswerButton';
import type { AnswersListProps } from './AnswersList.types';

export const AnswersList = (props: AnswersListProps) => {
  const { answers, checkedAnswers, onAnswerToggle } = props;

  return (
    <Grid container spacing={2} mb={4}>
      {Object.values(answers || {}).map((answer) => {
        if (!answer) {
          return null;
        }

        return (
          <Grid item xs={12} sm={6} key={answer}>
            <ToggleAnswerButton
              answer={answer}
              isChecked={checkedAnswers.includes(answer)}
              onToggle={onAnswerToggle}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
