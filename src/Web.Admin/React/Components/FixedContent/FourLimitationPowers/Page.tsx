import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../../TypeScript/Interfaces/IStaticContent';
import Loading from '../../Loading/Loading';
import MyAxios from '../../../Utils/MyAxios';
import MyFourLimitationPowers from './FourLimitationPowers';

export default (): React.ReactElement => {
  const [state, setState] = useState({} as IStaticIntroduction);

  useEffect((): void => {
    MyAxios(window.location.href)
      .get<IStaticIntroduction>('StaticContent/FourLimitationPowers')
      .then((response): void => setState(response.data));
  }, []);

  return (
    <>
      {(!state.Success) ? (<Loading />) : (<MyFourLimitationPowers myValues={state} />)}
    </>
  );
};
