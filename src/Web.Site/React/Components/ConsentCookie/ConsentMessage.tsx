import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

interface IProps {
  message: string,
  text: string,
  title: string,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const { message, text, title } = props;

  return (
    <>
      <Typography variant="body2">
        {message}
      </Typography>
      <Button
        color="inherit"
        component={Link}
        variant="text"
        size="small"
        title={title}
        to="/Policy/"
      >
        {text}
      </Button>
    </>
  );
};
