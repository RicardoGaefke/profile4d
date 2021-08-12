import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';

const getUserLicencasEnviadas = async (userGuid: string): Promise<IBasicReturn<IKey[]>> => {
  let licencasEnviadas: IBasicReturn<IKey[]> = {
    Success: true,
  };

  await myAxios(window.location.href).get<IBasicReturn<IKey[]>>(`SendKey/GetActivesByConsultantGuid/${userGuid}`)
    .then((response): IBasicReturn<IKey[]> => {
      const { data } = response;

      licencasEnviadas = data;

      return licencasEnviadas;
    })
    .catch((): IBasicReturn<IKey[]> => {
      licencasEnviadas.Success = false;

      return licencasEnviadas;
    });

  return licencasEnviadas;
};

export default getUserLicencasEnviadas;
