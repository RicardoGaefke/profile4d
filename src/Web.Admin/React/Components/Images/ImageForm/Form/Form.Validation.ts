import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Text_PT: Yup.string()
    .required(props.t('StaticImageForm:textPT.required'))
    .min(5, props.t('StaticImageForm:textPT.min'))
    .max(3000, props.t('StaticImageForm:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticImageForm:textENG.required'))
    .min(5, props.t('StaticImageForm:textENG.min'))
    .max(3000, props.t('StaticImageForm:textENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
