import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<any> => {
  const classes = useStyles({});
  const date: Date = new Date();

  return (
    <footer className={classes.footer} data-remove-printing="remove">
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Performance 9x &copy;
          {' '}
          {date.getFullYear()}
          {' '}
          by
          {' '}
          <Link
            href="https://www.ricardogaefke.com"
            color="inherit"
            title="Ricardo Gaefke"
          >
            Ricardo Gaefke
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};
