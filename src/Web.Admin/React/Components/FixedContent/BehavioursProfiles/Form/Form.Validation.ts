import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticBehavioursProfiles:titlePT.required'))
    .min(5, props.t('StaticBehavioursProfiles:titlePT.min'))
    .max(95, props.t('StaticBehavioursProfiles:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticBehavioursProfiles:titleENG.required'))
    .min(5, props.t('StaticBehavioursProfiles:titleENG.min'))
    .max(95, props.t('StaticBehavioursProfiles:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticBehavioursProfiles:textPT.required'))
    .min(5, props.t('StaticBehavioursProfiles:textPT.min'))
    .max(8000, props.t('StaticBehavioursProfiles:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticBehavioursProfiles:textENG.required'))
    .min(5, props.t('StaticBehavioursProfiles:textENG.min'))
    .max(8000, props.t('StaticBehavioursProfiles:textENG.max')),
});
