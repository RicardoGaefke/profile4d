import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticSFourPowersTwo:titlePT.required'))
    .min(5, props.t('StaticSFourPowersTwo:titlePT.min'))
    .max(95, props.t('StaticSFourPowersTwo:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticSFourPowersTwo:titleENG.required'))
    .min(5, props.t('StaticSFourPowersTwo:titleENG.min'))
    .max(95, props.t('StaticSFourPowersTwo:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticSFourPowersTwo:textPT.required'))
    .min(5, props.t('StaticSFourPowersTwo:textPT.min'))
    .max(8000, props.t('StaticSFourPowersTwo:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticSFourPowersTwo:textENG.required'))
    .min(5, props.t('StaticSFourPowersTwo:textENG.min'))
    .max(8000, props.t('StaticSFourPowersTwo:textENG.max')),
});
