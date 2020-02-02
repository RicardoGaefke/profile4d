import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticPersonalizedTable:titlePT.required'))
    .min(5, props.t('StaticPersonalizedTable:titlePT.min'))
    .max(95, props.t('StaticPersonalizedTable:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticPersonalizedTable:titleENG.required'))
    .min(5, props.t('StaticPersonalizedTable:titleENG.min'))
    .max(95, props.t('StaticPersonalizedTable:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticPersonalizedTable:textPT.required'))
    .min(5, props.t('StaticPersonalizedTable:textPT.min'))
    .max(8000, props.t('StaticPersonalizedTable:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticPersonalizedTable:textENG.required'))
    .min(5, props.t('StaticPersonalizedTable:textENG.min'))
    .max(8000, props.t('StaticPersonalizedTable:textENG.max')),
});
