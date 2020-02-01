import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticDominantWhoIAm:titlePT.required'))
    .min(5, props.t('StaticDominantWhoIAm:titlePT.min'))
    .max(95, props.t('StaticDominantWhoIAm:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticDominantWhoIAm:titleENG.required'))
    .min(5, props.t('StaticDominantWhoIAm:titleENG.min'))
    .max(95, props.t('StaticDominantWhoIAm:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticDominantWhoIAm:textPT.required'))
    .min(5, props.t('StaticDominantWhoIAm:textPT.min'))
    .max(8000, props.t('StaticDominantWhoIAm:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticDominantWhoIAm:textENG.required'))
    .min(5, props.t('StaticDominantWhoIAm:textENG.min'))
    .max(8000, props.t('StaticDominantWhoIAm:textENG.max')),
});
