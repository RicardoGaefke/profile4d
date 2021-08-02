import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Alt_PT: Yup.string()
    .required(props.t('StaticImageFourStages:altPT.required'))
    .min(5, props.t('StaticImageFourStages:altPT.min'))
    .max(95, props.t('StaticImageFourStages:altPT.max')),
  Alt_ENG: Yup.string()
    .required(props.t('StaticImageFourStages:altENG.required'))
    .min(5, props.t('StaticImageFourStages:altENG.min'))
    .max(95, props.t('StaticImageFourStages:altENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
