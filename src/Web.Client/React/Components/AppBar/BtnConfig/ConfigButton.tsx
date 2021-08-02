import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import TuneIcon from '@material-ui/icons/Tune';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import Button from '../Button/Button';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Config }, dispatch] = useStateValue();
    setLanguage();

    const toggleConfig = (): void => {
      dispatch({
        type: 'changeConfig',
        value: !Config,
      });
    };

    return (
      <Button
        color="inherit"
        title={t('CustomBtnConfig:title')}
        onClick={toggleConfig}
      >
        <TuneIcon />
      </Button>
    );
  },
);
