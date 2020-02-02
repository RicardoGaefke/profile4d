import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticOriginalXAdapted:titlePT.required'))
    .min(5, props.t('StaticOriginalXAdapted:titlePT.min'))
    .max(95, props.t('StaticOriginalXAdapted:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticOriginalXAdapted:titleENG.required'))
    .min(5, props.t('StaticOriginalXAdapted:titleENG.min'))
    .max(95, props.t('StaticOriginalXAdapted:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticOriginalXAdapted:textPT.required'))
    .min(5, props.t('StaticOriginalXAdapted:textPT.min'))
    .max(8000, props.t('StaticOriginalXAdapted:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticOriginalXAdapted:textENG.required'))
    .min(5, props.t('StaticOriginalXAdapted:textENG.min'))
    .max(8000, props.t('StaticOriginalXAdapted:textENG.max')),
});
