import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import { pathKeys } from '@/shared/lib/react-router';

const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];

export const DifficultyPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100dvh"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h4" mb={3}>
        Choose your difficulty
      </Typography>

      <Box display="flex" gap={4}>
        {DIFFICULTY_LEVELS.map((difficulty) => {
          return (
            <Link to={pathKeys.difficulty + difficulty} key={difficulty}>
              <Button variant="contained" color="secondary">
                {difficulty}
              </Button>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
