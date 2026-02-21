import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

import { pathKeys } from '@/shared/lib/reactRouter';
import { SmileCouscousSvg } from '@/shared/ui/couscous';

export const Page404 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100dvh"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom={-80}
        left="50%"
        height={500}
        width={400}
        sx={{ translate: '-50%' }}
        zIndex={0}
        sx-opacity={0.12}
      >
        <SmileCouscousSvg style={{ opacity: 0.12 }} />
      </Box>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 12 }}
      >
        <Typography
          variant="h1"
          fontWeight={900}
          fontSize="clamp(100px, 20vw, 200px)"
          lineHeight={1}
          color="rgba(255, 255, 255, 0.15)"
          textAlign="center"
          sx={{ userSelect: 'none' }}
        >
          404
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Typography variant="h5" color="#fff" textAlign="center" mt={2} mb={1}>
          Oops! This page got lost in the couscous
        </Typography>

        <Typography
          variant="body1"
          color="rgba(255, 255, 255, 0.7)"
          textAlign="center"
          mb={4}
        >
          The page you`re looking for doesn`t exist or has been moved.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link to={pathKeys.home()} style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 5, py: 1.5, borderRadius: 2 }}
            >
              Take me home
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </Box>
  );
};
