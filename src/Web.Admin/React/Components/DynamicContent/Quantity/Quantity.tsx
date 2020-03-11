import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Paper, Typography, LinearProgress,
} from '@material-ui/core';
import setLanguage from './Language';
import useStyles from './Styles';

interface IMinimum {
  total: number,
  minimum: number,
}

type IProps = IMinimum & WithTranslation;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    const { t, total, minimum } = props;
    const classes = useStyles();
    setLanguage();

    return (
      <div className={classes.parent}>
        <Paper>
          <Typography variant="h6" align="center">
            {`${t('Minimum:title')}: ${minimum.toString()}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(total >= minimum) ? minimum : (total * 100 / minimum)}
            valueBuffer={minimum}
            color={(total >= minimum) ? 'primary' : 'secondary'}
            className={classes.progress}
          />
          <Typography variant="body1" align="center">
            {`Total: ${total.toString()}`}
          </Typography>
        </Paper>
      </div>
    );
  },
);
