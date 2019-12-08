import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import Button from '../Button/Button';

export default (): React.ReactElement<any> => {
  const [{ Config }, dispatch] = useStateValue();

  const toggleConfig = (): void => {
    dispatch({
      type: 'changeConfig',
      value: !Config,
    });
  };

  return (
    <Button
      color="inherit"
      title="Alterar configurações do site"
      onClick={toggleConfig}
    >
      <TuneIcon />
    </Button>
  );
};
