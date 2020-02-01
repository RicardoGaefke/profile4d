import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticDominantName:titlePT.required'))
    .min(5, props.t('StaticDominantName:titlePT.min'))
    .max(95, props.t('StaticDominantName:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticDominantName:titleENG.required'))
    .min(5, props.t('StaticDominantName:titleENG.min'))
    .max(95, props.t('StaticDominantName:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticDominantName:textPT.required'))
    .min(5, props.t('StaticDominantName:textPT.min'))
    .max(8000, props.t('StaticDominantName:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticDominantName:textENG.required'))
    .min(5, props.t('StaticDominantName:textENG.min'))
    .max(8000, props.t('StaticDominantName:textENG.max')),
});
