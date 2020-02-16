import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../TypeScript/Interfaces/IStaticImageForm';
import Loading from '../../Loading/Loading';
import MyAxios from '../../../Utils/MyAxios';
import MyImageBehavioursProfiles from './ImageBehavioursProfiles';

export default (): React.ReactElement => {
  const [state, setState] = useState({} as IStaticImageForm);

  useEffect((): void => {
    MyAxios(window.location.href)
      .get<IStaticImageForm>('Image/Logo')
      .then((response): void => {
        const { data } = response;

        data.Data = '';
        setState(response.data);
      });
  }, []);

  return (
    <>
      {(!state.Success) ? (<Loading />) : (<MyImageBehavioursProfiles myValues={state} />)}
    </>
  );
};
