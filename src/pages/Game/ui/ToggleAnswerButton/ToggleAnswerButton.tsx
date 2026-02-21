import { Box, Typography } from '@mui/material';

import type { ToggleAnswerButtonProps } from './ToggleAnswerButton.types';

export const ToggleAnswerButton = (props: ToggleAnswerButtonProps) => {
  const { answer, isChecked, onToggle } = props;

  const handleToggle = () => {
    onToggle(answer);
  };

  return (
    <Box
      onClick={handleToggle}
      py={2}
      px={3}
      borderRadius={2}
      sx={{
        cursor: 'pointer',
        border: isChecked
          ? '2px solid #FFA247'
          : '2px solid rgba(255,255,255,0.1)',
        background: isChecked
          ? 'rgba(255, 162, 71, 0.12)'
          : 'rgba(255,255,255,0.05)',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: isChecked
            ? '#FFA247'
            : 'rgba(255,255,255,0.25)',
          background: isChecked
            ? 'rgba(255, 162, 71, 0.18)'
            : 'rgba(255,255,255,0.08)',
        },
      }}
    >
      <Typography color={isChecked ? '#FFA247' : '#fff'} fontWeight={500}>
        {answer}
      </Typography>
    </Box>
  );
};
