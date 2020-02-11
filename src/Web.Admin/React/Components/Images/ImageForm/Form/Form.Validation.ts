import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Alt_PT: Yup.string()
    .required(props.t('StaticImageForm:altPT.required'))
    .min(5, props.t('StaticImageForm:altPT.min'))
    .max(95, props.t('StaticImageForm:altPT.max')),
  Alt_ENG: Yup.string()
    .required(props.t('StaticImageForm:altENG.required'))
    .min(5, props.t('StaticImageForm:altENG.min'))
    .max(95, props.t('StaticImageForm:altENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
