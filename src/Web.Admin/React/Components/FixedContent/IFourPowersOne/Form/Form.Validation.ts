import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticIFourPowersOne:titlePT.required'))
    .min(5, props.t('StaticIFourPowersOne:titlePT.min'))
    .max(95, props.t('StaticIFourPowersOne:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticIFourPowersOne:titleENG.required'))
    .min(5, props.t('StaticIFourPowersOne:titleENG.min'))
    .max(95, props.t('StaticIFourPowersOne:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticIFourPowersOne:textPT.required'))
    .min(5, props.t('StaticIFourPowersOne:textPT.min'))
    .max(8000, props.t('StaticIFourPowersOne:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticIFourPowersOne:textENG.required'))
    .min(5, props.t('StaticIFourPowersOne:textENG.min'))
    .max(8000, props.t('StaticIFourPowersOne:textENG.max')),
});
