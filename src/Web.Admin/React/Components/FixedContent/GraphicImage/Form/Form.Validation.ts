import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticGraphicImage:titlePT.required'))
    .min(5, props.t('StaticGraphicImage:titlePT.min'))
    .max(95, props.t('StaticGraphicImage:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticGraphicImage:titleENG.required'))
    .min(5, props.t('StaticGraphicImage:titleENG.min'))
    .max(95, props.t('StaticGraphicImage:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticGraphicImage:textPT.required'))
    .min(5, props.t('StaticGraphicImage:textPT.min'))
    .max(8000, props.t('StaticGraphicImage:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticGraphicImage:textENG.required'))
    .min(5, props.t('StaticGraphicImage:textENG.min'))
    .max(8000, props.t('StaticGraphicImage:textENG.max')),
});
