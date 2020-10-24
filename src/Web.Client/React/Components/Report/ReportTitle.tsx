import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export interface ReportTitleProps {
  title: string;
}

const ReportTitle = (props: ReportTitleProps): JSX.Element => {
  const { title } = props;
  const classes = useStyles();

  return (
    <Typography
      variant="h4"
      gutterBottom
      dangerouslySetInnerHTML={{ __html: title }}
      className={classes.item}
    />
  );
};

ReportTitle.displayName = 'ReportTitle';

export default ReportTitle;
