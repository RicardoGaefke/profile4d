import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../TypeScript/Interfaces/IStaticContent';
import Loading from '../../Loading/Loading';
import MyAxios from '../../../Utils/MyAxios';
import MyTrinityBehavioralSabotage from './TrinityBehavioralSabotage';

export default (): React.ReactElement => {
  const [state, setState] = useState({} as IStaticFirstPage);

  useEffect((): void => {
    MyAxios(window.location.href)
      .get<IStaticFirstPage>('StaticContent/TrinityBehavioralSabotage')
      .then((response): void => setState(response.data));
  }, []);

  return (
    <>
      {(!state.Success) ? (<Loading />) : (<MyTrinityBehavioralSabotage myValues={state} />)}
    </>
  );
};