import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSFourPowersOne:titlePT.required'))
    .min(5, props.t('StaticSFourPowersOne:titlePT.min'))
    .max(95, props.t('StaticSFourPowersOne:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSFourPowersOne:titleENG.required'))
    .min(5, props.t('StaticSFourPowersOne:titleENG.min'))
    .max(95, props.t('StaticSFourPowersOne:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSFourPowersOne:textPT.required'))
    .min(5, props.t('StaticSFourPowersOne:textPT.min'))
    .max(8000, props.t('StaticSFourPowersOne:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSFourPowersOne:textENG.required'))
    .min(5, props.t('StaticSFourPowersOne:textENG.min'))
    .max(8000, props.t('StaticSFourPowersOne:textENG.max')),
});
