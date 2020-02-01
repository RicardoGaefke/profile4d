import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSabotageDominant:titlePT.required'))
    .min(5, props.t('StaticSabotageDominant:titlePT.min'))
    .max(95, props.t('StaticSabotageDominant:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSabotageDominant:titleENG.required'))
    .min(5, props.t('StaticSabotageDominant:titleENG.min'))
    .max(95, props.t('StaticSabotageDominant:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSabotageDominant:textPT.required'))
    .min(5, props.t('StaticSabotageDominant:textPT.min'))
    .max(8000, props.t('StaticSabotageDominant:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSabotageDominant:textENG.required'))
    .min(5, props.t('StaticSabotageDominant:textENG.min'))
    .max(8000, props.t('StaticSabotageDominant:textENG.max')),
});
