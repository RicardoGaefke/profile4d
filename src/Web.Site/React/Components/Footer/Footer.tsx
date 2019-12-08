import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<any> => {
  const classes = useStyles({});

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Profile4D &copy; 2019 by Ricardo Gaefke
        </Typography>
      </Container>
    </footer>
  );
};
