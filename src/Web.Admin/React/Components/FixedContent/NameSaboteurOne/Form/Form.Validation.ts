import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticNameSaboteurOne:titlePT.required'))
    .min(5, props.t('StaticNameSaboteurOne:titlePT.min'))
    .max(95, props.t('StaticNameSaboteurOne:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticNameSaboteurOne:titleENG.required'))
    .min(5, props.t('StaticNameSaboteurOne:titleENG.min'))
    .max(95, props.t('StaticNameSaboteurOne:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticNameSaboteurOne:textPT.required'))
    .min(5, props.t('StaticNameSaboteurOne:textPT.min'))
    .max(8000, props.t('StaticNameSaboteurOne:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticNameSaboteurOne:textENG.required'))
    .min(5, props.t('StaticNameSaboteurOne:textENG.min'))
    .max(8000, props.t('StaticNameSaboteurOne:textENG.max')),
});
