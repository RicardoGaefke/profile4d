import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Drawer, Typography, Divider } from '@material-ui/core';
import setLanguage from './Language';
import {
  // eslint-disable-next-line no-unused-vars
  useStateValue, withContext, IStateProvider, IContext,
} from '../../Initial/Context/StateProvider';
import Styles from './Styles';
import ConfigTheme from './ChangeTheme/Theme';
import ConfigLanguage from './ChangeLanguage/ChangeLanguage';
import Button from './SaveButton/Button';

const Ctx = withContext((props: any): React.ReactElement => {
  // eslint-disable-next-line no-unused-vars
  const { context } = props;

  console.log('child', context);

  return (
    <>
      {context[0].Title}
    </>
  );
});

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Config }, dispatch] = useStateValue();
    const classes = Styles({});
    setLanguage();

    const toggle = (): void => {
      dispatch({
        type: 'changeConfig',
        value: !Config,
      });
    };

    return (
      <Drawer
        open={Config}
        anchor="right"
        onClose={toggle}
      >
        <div className={classes.root}>
          <Ctx />
          <Typography variant="h6">
            {t('DrawerConfig:title')}
          </Typography>
          <Divider className={classes.divider} />
          <ConfigTheme />
          <ConfigLanguage />
          <Button
            toggle={toggle}
          />
        </div>
      </Drawer>
    );
  },
);
