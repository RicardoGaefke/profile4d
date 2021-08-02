import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Alt_PT: Yup.string()
    .required(props.t('StaticImageFourIntelligenceCenters:altPT.required'))
    .min(5, props.t('StaticImageFourIntelligenceCenters:altPT.min'))
    .max(95, props.t('StaticImageFourIntelligenceCenters:altPT.max')),
  Alt_ENG: Yup.string()
    .required(props.t('StaticImageFourIntelligenceCenters:altENG.required'))
    .min(5, props.t('StaticImageFourIntelligenceCenters:altENG.min'))
    .max(95, props.t('StaticImageFourIntelligenceCenters:altENG.max')),
  Src: Yup.string()
    .required('Ops! Faltou a imagem'),
});
