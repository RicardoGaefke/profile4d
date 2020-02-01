import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticNameSaboteurTwo:titlePT.required'))
    .min(5, props.t('StaticNameSaboteurTwo:titlePT.min'))
    .max(95, props.t('StaticNameSaboteurTwo:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticNameSaboteurTwo:titleENG.required'))
    .min(5, props.t('StaticNameSaboteurTwo:titleENG.min'))
    .max(95, props.t('StaticNameSaboteurTwo:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticNameSaboteurTwo:textPT.required'))
    .min(5, props.t('StaticNameSaboteurTwo:textPT.min'))
    .max(8000, props.t('StaticNameSaboteurTwo:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticNameSaboteurTwo:textENG.required'))
    .min(5, props.t('StaticNameSaboteurTwo:textENG.min'))
    .max(8000, props.t('StaticNameSaboteurTwo:textENG.max')),
});
