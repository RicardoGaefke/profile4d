// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../../TypeScript/Interfaces/IStaticContent';
import myAxios from '../../../../Utils/MyAxios';

export default async (): Promise<IStaticFirstPage> => myAxios(window.location.href)
  .get<IStaticFirstPage>('StaticContent/FirstPage')
  .then((response): IStaticFirstPage => response.data);
