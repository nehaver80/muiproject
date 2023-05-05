import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

const Card = ({ cardImage }) => {
  return (
    <Box>
      <Link
        href="http://localhost:3000/details"
        sx={{ textDecoration: 'none' }}
      >
        {' '}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            component="div"
            color={'tomato'}
          >
            PERFUME
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            Wearing this will make everyone love you
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
          
            align="center"
            component="div"
            color="text.secondary"
          >
            it's love
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary">
            perfumes are very good to use everyone love it
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default Card;
