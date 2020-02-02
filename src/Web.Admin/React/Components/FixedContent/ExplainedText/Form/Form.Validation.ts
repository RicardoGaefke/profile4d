import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticExplainedText:titlePT.required'))
    .min(5, props.t('StaticExplainedText:titlePT.min'))
    .max(95, props.t('StaticExplainedText:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticExplainedText:titleENG.required'))
    .min(5, props.t('StaticExplainedText:titleENG.min'))
    .max(95, props.t('StaticExplainedText:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticExplainedText:textPT.required'))
    .min(5, props.t('StaticExplainedText:textPT.min'))
    .max(8000, props.t('StaticExplainedText:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticExplainedText:textENG.required'))
    .min(5, props.t('StaticExplainedText:textENG.min'))
    .max(8000, props.t('StaticExplainedText:textENG.max')),
});
