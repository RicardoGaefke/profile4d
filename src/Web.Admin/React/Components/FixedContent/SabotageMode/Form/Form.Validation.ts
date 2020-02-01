import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSabotageMode:titlePT.required'))
    .min(5, props.t('StaticSabotageMode:titlePT.min'))
    .max(95, props.t('StaticSabotageMode:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSabotageMode:titleENG.required'))
    .min(5, props.t('StaticSabotageMode:titleENG.min'))
    .max(95, props.t('StaticSabotageMode:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSabotageMode:textPT.required'))
    .min(5, props.t('StaticSabotageMode:textPT.min'))
    .max(8000, props.t('StaticSabotageMode:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSabotageMode:textENG.required'))
    .min(5, props.t('StaticSabotageMode:textENG.min'))
    .max(8000, props.t('StaticSabotageMode:textENG.max')),
});
