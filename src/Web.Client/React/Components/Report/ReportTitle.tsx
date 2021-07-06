import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export interface ReportTitleProps {
  title: string;
  breakPage?: boolean;
}

const ReportTitle = (props: ReportTitleProps): JSX.Element => {
  const { title, breakPage = false } = props;
  const classes = useStyles();

  return (
    <Typography
      variant="h4"
      gutterBottom
      dangerouslySetInnerHTML={{ __html: title }}
      className={(breakPage) ? classes.brakePage : classes.title}
    />
  );
};

ReportTitle.displayName = 'ReportTitle';

export default ReportTitle;
