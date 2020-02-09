import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticImageForm:titlePT.required'))
    .min(5, props.t('StaticImageForm:titlePT.min'))
    .max(95, props.t('StaticImageForm:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticImageForm:titleENG.required'))
    .min(5, props.t('StaticImageForm:titleENG.min'))
    .max(95, props.t('StaticImageForm:titleENG.max')),
});
