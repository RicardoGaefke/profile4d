import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Alt_PT: Yup.string()
    .required(props.t('StaticImageTrinoBrain:altPT.required'))
    .min(5, props.t('StaticImageTrinoBrain:altPT.min'))
    .max(95, props.t('StaticImageTrinoBrain:altPT.max')),
  Alt_ENG: Yup.string()
    .required(props.t('StaticImageTrinoBrain:altENG.required'))
    .min(5, props.t('StaticImageTrinoBrain:altENG.min'))
    .max(95, props.t('StaticImageTrinoBrain:altENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
