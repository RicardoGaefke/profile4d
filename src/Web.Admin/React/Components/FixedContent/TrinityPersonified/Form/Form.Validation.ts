import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinityPersonified:titlePT.required'))
    .min(5, props.t('StaticTrinityPersonified:titlePT.min'))
    .max(95, props.t('StaticTrinityPersonified:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinityPersonified:titleENG.required'))
    .min(5, props.t('StaticTrinityPersonified:titleENG.min'))
    .max(95, props.t('StaticTrinityPersonified:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinityPersonified:textPT.required'))
    .min(5, props.t('StaticTrinityPersonified:textPT.min'))
    .max(8000, props.t('StaticTrinityPersonified:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinityPersonified:textENG.required'))
    .min(5, props.t('StaticTrinityPersonified:textENG.min'))
    .max(8000, props.t('StaticTrinityPersonified:textENG.max')),
});
