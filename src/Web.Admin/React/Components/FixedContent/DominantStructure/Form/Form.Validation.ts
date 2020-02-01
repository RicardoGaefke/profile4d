import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticDominantStructure:titlePT.required'))
    .min(5, props.t('StaticDominantStructure:titlePT.min'))
    .max(95, props.t('StaticDominantStructure:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticDominantStructure:titleENG.required'))
    .min(5, props.t('StaticDominantStructure:titleENG.min'))
    .max(95, props.t('StaticDominantStructure:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticDominantStructure:textPT.required'))
    .min(5, props.t('StaticDominantStructure:textPT.min'))
    .max(8000, props.t('StaticDominantStructure:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticDominantStructure:textENG.required'))
    .min(5, props.t('StaticDominantStructure:textENG.min'))
    .max(8000, props.t('StaticDominantStructure:textENG.max')),
});
