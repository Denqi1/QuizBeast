import { Box, FormGroup, Grid } from '@mui/material';

import { ToggleAnswerButton } from '../ToggleAnswerButton';
import type { AnswersListProps } from './AnswersList.types';

export const AnswersList = (props: AnswersListProps) => {
  const { answers, checkedAnswers, onAnswerToggle } = props;

  return (
    <Grid
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      mb={5}
      container
    >
      {Object.values(answers || {}).map(
        (answer) =>
          answer && (
            <Grid item xs={6} key={answer}>
              <Box bgcolor="#D4A9FF" borderRadius="5px" p={2}>
                <FormGroup>
                  <ToggleAnswerButton
                    answer={answer}
                    isChecked={checkedAnswers.includes(answer)}
                    onToggle={onAnswerToggle}
                  />
                </FormGroup>
              </Box>
            </Grid>
          )
      )}
    </Grid>
  );
};
