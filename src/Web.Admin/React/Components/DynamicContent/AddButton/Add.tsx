import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withRouter, useHistory, RouteComponentProps } from 'react-router-dom';
import {
  Fab, Tooltip,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import setLanguage from './Language';
import useStyles from '../Questions/Styles';

interface MyProps {
  to: string,
}

type IProps = WithTranslation & RouteComponentProps & MyProps;

export default withTranslation()(
  withRouter(
    (props: IProps): React.ReactElement<IProps> => {
      setLanguage();
      const history = useHistory();
      const classes = useStyles();
      const { t, to } = props;

      const newQuestion = (): void => {
        history.push(to);
      };

      return (
        <Tooltip title={t('AddQuestion:title')} placement="right">
          <Fab
            color="primary"
            aria-label={t('AddQuestion:title')}
            onClick={newQuestion}
            className={classes.add}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      );
    },
  ),
);
