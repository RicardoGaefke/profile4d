import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticIdentifiedConflicts:titlePT.required'))
    .min(5, props.t('StaticIdentifiedConflicts:titlePT.min'))
    .max(95, props.t('StaticIdentifiedConflicts:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticIdentifiedConflicts:titleENG.required'))
    .min(5, props.t('StaticIdentifiedConflicts:titleENG.min'))
    .max(95, props.t('StaticIdentifiedConflicts:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticIdentifiedConflicts:textPT.required'))
    .min(5, props.t('StaticIdentifiedConflicts:textPT.min'))
    .max(8000, props.t('StaticIdentifiedConflicts:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticIdentifiedConflicts:textENG.required'))
    .min(5, props.t('StaticIdentifiedConflicts:textENG.min'))
    .max(8000, props.t('StaticIdentifiedConflicts:textENG.max')),
});
