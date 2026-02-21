import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';

import { ParallaxText } from '@/shared/ui/parallax-text';
import { SmileCouscousSvg } from '@/shared/ui/couscous';

import { pathKeys } from '@/shared/lib/reactRouter';

export const HomePage = () => {
  return (
    <Box height="100dvh">
      <Box>
        <ParallaxText baseVelocity={0.6}>laughing couscous</ParallaxText>
        <ParallaxText baseVelocity={-0.6}>quiz game</ParallaxText>
      </Box>

      <Box display="flex" justifyContent="center" mt={15}>
        <Link to={pathKeys.category()}>
          <motion.div whileHover={{ scale: 1.3 }}>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              sx={{ width: '180px' }}
            >
              Play
            </Button>
          </motion.div>
        </Link>
      </Box>

      <Box
        position="absolute"
        right="50%"
        bottom="0px"
        left="50%"
        height={700}
        width={600}
        sx={{
          translate: '-50%',
        }}
        overflow="hidden"
        zIndex={-10}
      >
        <SmileCouscousSvg />
      </Box>
    </Box>
  );
};
