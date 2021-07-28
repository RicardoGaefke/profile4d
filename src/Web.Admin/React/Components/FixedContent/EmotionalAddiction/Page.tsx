import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../../TypeScript/Interfaces/IStaticContent';
import Loading from '../../Loading/Loading';
import MyAxios from '../../../Utils/MyAxios';
import MyEmotionalAddiction from './EmotionalAddiction';

export default (): React.ReactElement => {
  const [state, setState] = useState({} as IStaticIntroduction);

  useEffect((): void => {
    MyAxios(window.location.href)
      .get<IStaticIntroduction>('StaticContent/EmotionalAddiction')
      .then((response): void => setState(response.data));
  }, []);

  return (
    <>
      {(!state.Success) ? (<Loading />) : (<MyEmotionalAddiction myValues={state} />)}
    </>
  );
};
