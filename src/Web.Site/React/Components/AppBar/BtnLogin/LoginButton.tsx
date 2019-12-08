import React from 'react';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import { Href } from '../../../Utils/Domain';
import Button from '../Button/Button';

export default (): React.ReactElement<any> => {
  const [{ Language }] = useStateValue();

  const myLogin = (): void => {
    // const url = new Href(window.location.href.replace(/https?:\/\//i, ''));
    const url = new Href('staging.www.ricardogaefke.com');
    // window.location.href = url.toLogin();
    // eslint-disable-next-line no-console
    console.log(url.toLogin());
  };

  return (
    <Button
      color="inherit"
      title={`Manage identity ${Language}`}
      onClick={myLogin}
    >
      <PermIdentityIcon />
    </Button>
  );
};
