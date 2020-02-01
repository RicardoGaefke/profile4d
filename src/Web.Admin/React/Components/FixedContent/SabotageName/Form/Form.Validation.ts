import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSabotageName:titlePT.required'))
    .min(5, props.t('StaticSabotageName:titlePT.min'))
    .max(95, props.t('StaticSabotageName:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSabotageName:titleENG.required'))
    .min(5, props.t('StaticSabotageName:titleENG.min'))
    .max(95, props.t('StaticSabotageName:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSabotageName:textPT.required'))
    .min(5, props.t('StaticSabotageName:textPT.min'))
    .max(8000, props.t('StaticSabotageName:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSabotageName:textENG.required'))
    .min(5, props.t('StaticSabotageName:textENG.min'))
    .max(8000, props.t('StaticSabotageName:textENG.max')),
});
