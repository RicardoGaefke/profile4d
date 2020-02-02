import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinitySpecifics:titlePT.required'))
    .min(5, props.t('StaticTrinitySpecifics:titlePT.min'))
    .max(95, props.t('StaticTrinitySpecifics:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinitySpecifics:titleENG.required'))
    .min(5, props.t('StaticTrinitySpecifics:titleENG.min'))
    .max(95, props.t('StaticTrinitySpecifics:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinitySpecifics:textPT.required'))
    .min(5, props.t('StaticTrinitySpecifics:textPT.min'))
    .max(8000, props.t('StaticTrinitySpecifics:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinitySpecifics:textENG.required'))
    .min(5, props.t('StaticTrinitySpecifics:textENG.min'))
    .max(8000, props.t('StaticTrinitySpecifics:textENG.max')),
});
