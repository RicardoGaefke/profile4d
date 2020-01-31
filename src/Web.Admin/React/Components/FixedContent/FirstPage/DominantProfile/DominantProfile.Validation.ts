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
    .max(9500, props.t('StaticFirstPage:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticFirstPage:textENG.required'))
    .min(5, props.t('StaticFirstPage:textENG.min'))
    .max(9500, props.t('StaticFirstPage:textENG.max')),
  Title1_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title1_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title2_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title2_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title3_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title3_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title4_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title4_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title5_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title5_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title6_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title6_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title7_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title7_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title8_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title8_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title9_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title9_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
  Title10_PT: Yup.string()
    .required(props.t('StaticFirstPage:titlePT.required'))
    .min(5, props.t('StaticFirstPage:titlePT.min'))
    .max(95, props.t('StaticFirstPage:titlePT.max')),
  Title10_ENG: Yup.string()
    .required(props.t('StaticFirstPage:titleENG.required'))
    .min(5, props.t('StaticFirstPage:titleENG.min'))
    .max(95, props.t('StaticFirstPage:titleENG.max')),
});
