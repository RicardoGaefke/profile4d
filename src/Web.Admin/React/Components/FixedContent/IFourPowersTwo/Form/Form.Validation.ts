import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticIFourPowersTwo:titlePT.required'))
    .min(5, props.t('StaticIFourPowersTwo:titlePT.min'))
    .max(95, props.t('StaticIFourPowersTwo:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticIFourPowersTwo:titleENG.required'))
    .min(5, props.t('StaticIFourPowersTwo:titleENG.min'))
    .max(95, props.t('StaticIFourPowersTwo:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticIFourPowersTwo:textPT.required'))
    .min(5, props.t('StaticIFourPowersTwo:textPT.min'))
    .max(8000, props.t('StaticIFourPowersTwo:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticIFourPowersTwo:textENG.required'))
    .min(5, props.t('StaticIFourPowersTwo:textENG.min'))
    .max(8000, props.t('StaticIFourPowersTwo:textENG.max')),
});
