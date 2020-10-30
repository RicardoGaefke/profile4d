import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export interface ReportTextProps {
  text: string;
  border?: boolean;
}

const ReportText = (props: ReportTextProps): JSX.Element => {
  const { text, border = false } = props;
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      component="div"
      align="justify"
      dangerouslySetInnerHTML={{ __html: text }}
      className={(border) ? classes.itemWithBorder : classes.item}
    />
  );
};

ReportText.displayName = 'ReportText';

export default ReportText;
