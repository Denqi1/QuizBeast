import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Grid } from '@mui/material';

import { CategoryListProps } from './CategoryList.props';

export const CategoryList = (props: CategoryListProps) => {
  const { categories } = props;

  let duration = 0.5;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {categories.map((category) => {
        const { id, name } = category;

        return (
          <Grid item xs={2} sm={4} md={4} key={id}>
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.2 }}
              /**
               * TODO:
               * Something strange is happening here, we need to figure it out.
               */
              transition={{ duration: (duration = duration + 0.1) }}
            >
              <Link to={name}>
                <Button color="secondary" variant="contained">
                  {name}
                </Button>
              </Link>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};
