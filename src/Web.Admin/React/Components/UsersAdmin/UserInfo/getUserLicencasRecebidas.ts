import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';

const getUserLicencasRecebidas = async (userGuid: string): Promise<IBasicReturn<IKey[]>> => {
  let licencasRecebidas: IBasicReturn<IKey[]> = {
    Success: true,
  };

  await myAxios(window.location.href).get<IBasicReturn<IKey[]>>(`SendKey/GetActivesByUserGuid/${userGuid}`)
    .then((response): IBasicReturn<IKey[]> => {
      const { data } = response;

      licencasRecebidas = data;

      return licencasRecebidas;
    })
    .catch((): IBasicReturn<IKey[]> => {
      licencasRecebidas.Success = false;

      return licencasRecebidas;
    });

  return licencasRecebidas;
};

export default getUserLicencasRecebidas;
