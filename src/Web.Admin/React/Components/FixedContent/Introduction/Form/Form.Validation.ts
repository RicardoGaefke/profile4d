import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticIntroduction:titlePT.required'))
    .min(5, props.t('StaticIntroduction:titlePT.min'))
    .max(95, props.t('StaticIntroduction:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticIntroduction:titleENG.required'))
    .min(5, props.t('StaticIntroduction:titleENG.min'))
    .max(95, props.t('StaticIntroduction:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticIntroduction:textPT.required'))
    .matches(new RegExp('<p></p>'), props.t('StaticIntroduction:textPT.required'))
    .min(5, props.t('StaticIntroduction:textPT.min'))
    .max(8000, props.t('StaticIntroduction:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticIntroduction:textENG.required'))
    .min(5, props.t('StaticIntroduction:textENG.min'))
    .max(8000, props.t('StaticIntroduction:textENG.max')),
});
