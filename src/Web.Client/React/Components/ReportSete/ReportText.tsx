import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export interface ReportTextProps {
  text: string;
  border?: boolean;
  breakPage?: boolean;
}

const ReportText = (props: ReportTextProps): JSX.Element => {
  const { text, border = false, breakPage } = props;
  const classes = useStyles();

  const textStyle: string = `${classes.item} ${(border) ? classes.itemWithBorder : ''} ${(breakPage) ? classes.itemBrakePage : ''}`;

  return (
    <Typography
      variant="body1"
      component="div"
      align="justify"
      dangerouslySetInnerHTML={{ __html: text }}
      className={textStyle}
    />
  );
};

ReportText.displayName = 'ReportText';

export default ReportText;
