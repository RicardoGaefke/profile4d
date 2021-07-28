import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Alt_PT: Yup.string()
    .required(props.t('StaticImageThreeDimensions:altPT.required'))
    .min(5, props.t('StaticImageThreeDimensions:altPT.min'))
    .max(95, props.t('StaticImageThreeDimensions:altPT.max')),
  Alt_ENG: Yup.string()
    .required(props.t('StaticImageThreeDimensions:altENG.required'))
    .min(5, props.t('StaticImageThreeDimensions:altENG.min'))
    .max(95, props.t('StaticImageThreeDimensions:altENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
