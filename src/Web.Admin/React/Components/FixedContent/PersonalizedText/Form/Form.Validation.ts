import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticPersonalizedText:titlePT.required'))
    .min(5, props.t('StaticPersonalizedText:titlePT.min'))
    .max(95, props.t('StaticPersonalizedText:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticPersonalizedText:titleENG.required'))
    .min(5, props.t('StaticPersonalizedText:titleENG.min'))
    .max(95, props.t('StaticPersonalizedText:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticPersonalizedText:textPT.required'))
    .min(5, props.t('StaticPersonalizedText:textPT.min'))
    .max(8000, props.t('StaticPersonalizedText:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticPersonalizedText:textENG.required'))
    .min(5, props.t('StaticPersonalizedText:textENG.min'))
    .max(8000, props.t('StaticPersonalizedText:textENG.max')),
});
