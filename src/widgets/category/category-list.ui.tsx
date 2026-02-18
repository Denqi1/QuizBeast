import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Grid, Typography } from '@mui/material';

import { CategoryModel, getCategories } from '@/entities/Category';

export function CategoryList() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    (async () => {
      const dataList = await getCategories();
      setCategories(dataList);
    })();
  }, []);

  let duration = 0.5;

  return (
    <Box>
      <Box
        maxWidth={644}
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="0px auto"
        height="100dvh"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, ease: 'easeIn' }}
        >
          <Typography variant="h5">
            Hi! what topic are you interested in?
          </Typography>
        </motion.div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categories.map((category) => (
            <Grid item xs={2} sm={4} md={4} key={category.id}>
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: (duration = duration + 0.1) }}
              >
                <Link to={category.name}>
                  <Button color="secondary" variant="contained">
                    {category.name}
                  </Button>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
