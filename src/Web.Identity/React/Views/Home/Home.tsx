import React from 'react';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Main from '../../Components/Home/Main/Main';
import Connected from '../../Components/Connected/Main/Main';

export default (): React.ReactElement => {
  const [{ IsAuthenticated }] = useStateValue();

  return (
    <>
      {(IsAuthenticated) ? <Connected /> : <Main />}
    </>
  );
};
