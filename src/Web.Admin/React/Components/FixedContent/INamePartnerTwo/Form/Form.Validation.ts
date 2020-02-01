import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticINamePartnerTwo:titlePT.required'))
    .min(5, props.t('StaticINamePartnerTwo:titlePT.min'))
    .max(95, props.t('StaticINamePartnerTwo:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticINamePartnerTwo:titleENG.required'))
    .min(5, props.t('StaticINamePartnerTwo:titleENG.min'))
    .max(95, props.t('StaticINamePartnerTwo:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticINamePartnerTwo:textPT.required'))
    .min(5, props.t('StaticINamePartnerTwo:textPT.min'))
    .max(8000, props.t('StaticINamePartnerTwo:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticINamePartnerTwo:textENG.required'))
    .min(5, props.t('StaticINamePartnerTwo:textENG.min'))
    .max(8000, props.t('StaticINamePartnerTwo:textENG.max')),
});
