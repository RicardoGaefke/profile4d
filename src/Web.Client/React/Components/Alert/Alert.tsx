import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
// eslint-disable-next-line no-unused-vars
import { IAlert } from './IAlert';

export default (props: IAlert): React.ReactElement<IAlert> => {
  const { title, text } = props;

  return (
    <Alert
      {...props}
    >
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );
};
