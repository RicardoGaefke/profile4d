import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticPDI:titlePT.required'))
    .min(5, props.t('StaticPDI:titlePT.min'))
    .max(95, props.t('StaticPDI:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticPDI:titleENG.required'))
    .min(5, props.t('StaticPDI:titleENG.min'))
    .max(95, props.t('StaticPDI:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticPDI:textPT.required'))
    .min(5, props.t('StaticPDI:textPT.min'))
    .max(8000, props.t('StaticPDI:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticPDI:textENG.required'))
    .min(5, props.t('StaticPDI:textENG.min'))
    .max(8000, props.t('StaticPDI:textENG.max')),
});
