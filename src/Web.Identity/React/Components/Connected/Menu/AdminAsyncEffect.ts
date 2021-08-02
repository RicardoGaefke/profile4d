// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyAxios from '../../../Utils/MyAxios';

export default async (setAdmin: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> => {
  await MyAxios(window.location.href).get<boolean>('Identity/IsAdmin',
    {}).then((response): void => {
    const { data } = response;
    setAdmin(data);
  });
};
