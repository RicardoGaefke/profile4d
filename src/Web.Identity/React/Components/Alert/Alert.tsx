/* eslint-disable no-unused-vars */
import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

interface IProps {
  title: string,
  text: string,
  severity: 'info' | 'warning' | 'error' | 'success',
}

export default (props: IProps): React.ReactElement<IProps> => {
  const { title, text, severity } = props;

  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Alert>
  );
};
