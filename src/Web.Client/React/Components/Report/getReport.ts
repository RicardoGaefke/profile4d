// eslint-disable-next-line no-unused-vars
import { IReport } from '../../../../TypeScript/Interfaces/IReport';
import Axios from '../../Utils/Axios';

const getReport = async (guid: string): Promise<IReport> => {
  let reportData: IReport = {
    Success: true,
  };

  await Axios(window.location.href).get<IReport>(`SendKey/Report/${guid}`)
    .then((response): IReport => {
      const { data } = response;

      if (data.Success) {
        reportData = data;
        return reportData;
      }

      reportData.Success = false;
      return reportData;
    })
    .catch((): IReport => {
      reportData.Success = false;

      return reportData;
    });

  return reportData;
};

export default getReport;
