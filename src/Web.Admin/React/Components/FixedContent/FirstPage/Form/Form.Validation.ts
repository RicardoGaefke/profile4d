import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticFirstPage:textPT.required'))
    .min(5, props.t('StaticFirstPage:textPT.min'))
    .max(95, props.t('StaticFirstPage:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticFirstPage:textENG.required'))
    .min(5, props.t('StaticFirstPage:textENG.min'))
    .max(95, props.t('StaticFirstPage:textENG.max')),
});
