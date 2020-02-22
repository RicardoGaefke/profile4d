import React from 'react';
import { Skeleton } from '@material-ui/lab';

export default (): React.ReactElement => (
  <>
    <Skeleton variant="rect" height={100} />
    <Skeleton variant="text" />
    <Skeleton variant="rect" height={30} />
    <Skeleton variant="text" />
  </>
);
