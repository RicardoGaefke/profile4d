import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSabotageWhoIAm:titlePT.required'))
    .min(5, props.t('StaticSabotageWhoIAm:titlePT.min'))
    .max(95, props.t('StaticSabotageWhoIAm:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSabotageWhoIAm:titleENG.required'))
    .min(5, props.t('StaticSabotageWhoIAm:titleENG.min'))
    .max(95, props.t('StaticSabotageWhoIAm:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSabotageWhoIAm:textPT.required'))
    .min(5, props.t('StaticSabotageWhoIAm:textPT.min'))
    .max(8000, props.t('StaticSabotageWhoIAm:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSabotageWhoIAm:textENG.required'))
    .min(5, props.t('StaticSabotageWhoIAm:textENG.min'))
    .max(8000, props.t('StaticSabotageWhoIAm:textENG.max')),
});
