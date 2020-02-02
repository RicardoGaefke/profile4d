import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticDefaultText:titlePT.required'))
    .min(5, props.t('StaticDefaultText:titlePT.min'))
    .max(95, props.t('StaticDefaultText:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticDefaultText:titleENG.required'))
    .min(5, props.t('StaticDefaultText:titleENG.min'))
    .max(95, props.t('StaticDefaultText:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticDefaultText:textPT.required'))
    .min(5, props.t('StaticDefaultText:textPT.min'))
    .max(8000, props.t('StaticDefaultText:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticDefaultText:textENG.required'))
    .min(5, props.t('StaticDefaultText:textENG.min'))
    .max(8000, props.t('StaticDefaultText:textENG.max')),
});
