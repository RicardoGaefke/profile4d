import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticINamePartnerOne:titlePT.required'))
    .min(5, props.t('StaticINamePartnerOne:titlePT.min'))
    .max(95, props.t('StaticINamePartnerOne:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticINamePartnerOne:titleENG.required'))
    .min(5, props.t('StaticINamePartnerOne:titleENG.min'))
    .max(95, props.t('StaticINamePartnerOne:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticINamePartnerOne:textPT.required'))
    .min(5, props.t('StaticINamePartnerOne:textPT.min'))
    .max(8000, props.t('StaticINamePartnerOne:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticINamePartnerOne:textENG.required'))
    .min(5, props.t('StaticINamePartnerOne:textENG.min'))
    .max(8000, props.t('StaticINamePartnerOne:textENG.max')),
});
