import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../TypeScript/Interfaces/IStaticContent';
import Loading from '../../Loading/Loading';
import MyAxios from '../../../Utils/MyAxios';
import MyPersonalizedText from './PersonalizedText';

export default (): React.ReactElement => {
  const [state, setState] = useState({} as IStaticFirstPage);

  useEffect((): void => {
    MyAxios(window.location.href)
      .get<IStaticFirstPage>('StaticContent/PersonalizedText')
      .then((response): void => setState(response.data));
  }, []);

  return (
    <>
      {(!state.Success) ? (<Loading />) : (<MyPersonalizedText myValues={state} />)}
    </>
  );
};
