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
          Hextriade &copy;
          {' '}
          {date.getFullYear()}
          {' '}
          by
          {' '}
          <Link
            href="https://www.interdev.me"
            color="inherit"
            title="Ricardo Gaefke"
          >
            interdev.me
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};
