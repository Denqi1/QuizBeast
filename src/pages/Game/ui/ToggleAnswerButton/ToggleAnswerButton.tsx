import { Checkbox, FormControlLabel } from '@mui/material';

import type { ToggleAnswerButtonProps } from './ToggleAnswerButton.types';

export const ToggleAnswerButton = (props: ToggleAnswerButtonProps) => {
  const { answer, isChecked, onToggle } = props;

  const handleToggle = () => {
    onToggle(answer);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox onChange={handleToggle} checked={isChecked} color="default" />
      }
      color="#5A1E96"
      label={answer}
    />
  );
};
