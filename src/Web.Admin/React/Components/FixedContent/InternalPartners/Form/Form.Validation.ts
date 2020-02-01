import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinityInternalPartners:titlePT.required'))
    .min(5, props.t('StaticTrinityInternalPartners:titlePT.min'))
    .max(95, props.t('StaticTrinityInternalPartners:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinityInternalPartners:titleENG.required'))
    .min(5, props.t('StaticTrinityInternalPartners:titleENG.min'))
    .max(95, props.t('StaticTrinityInternalPartners:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinityInternalPartners:textPT.required'))
    .min(5, props.t('StaticTrinityInternalPartners:textPT.min'))
    .max(8000, props.t('StaticTrinityInternalPartners:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinityInternalPartners:textENG.required'))
    .min(5, props.t('StaticTrinityInternalPartners:textENG.min'))
    .max(8000, props.t('StaticTrinityInternalPartners:textENG.max')),
});
