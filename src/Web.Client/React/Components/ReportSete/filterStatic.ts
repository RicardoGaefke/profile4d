// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';

export const filterStaticTitle = (id: number, Language: string, staticContent: IStaticIntroduction[]): string => {
  const content = staticContent.filter((item): boolean => item.Id === id)[0];

  const title = (Language === 'ENG') ? content?.Title_ENG : content?.Title_PT;

  return title || '';
};

export const filterStaticText = (id: number, Language: string, staticContent: IStaticIntroduction[]): string => {
  const content = staticContent.filter((item): boolean => item.Id === id)[0];

  const text = (Language === 'ENG') ? content?.Text_ENG : content?.Text_PT;

  return text || '';
};
