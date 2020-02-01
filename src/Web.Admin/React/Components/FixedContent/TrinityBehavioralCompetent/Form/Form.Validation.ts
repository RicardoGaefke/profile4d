import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinityBehavioralCompetent:titlePT.required'))
    .min(5, props.t('StaticTrinityBehavioralCompetent:titlePT.min'))
    .max(95, props.t('StaticTrinityBehavioralCompetent:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinityBehavioralCompetent:titleENG.required'))
    .min(5, props.t('StaticTrinityBehavioralCompetent:titleENG.min'))
    .max(95, props.t('StaticTrinityBehavioralCompetent:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinityBehavioralCompetent:textPT.required'))
    .min(5, props.t('StaticTrinityBehavioralCompetent:textPT.min'))
    .max(8000, props.t('StaticTrinityBehavioralCompetent:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinityBehavioralCompetent:textENG.required'))
    .min(5, props.t('StaticTrinityBehavioralCompetent:textENG.min'))
    .max(8000, props.t('StaticTrinityBehavioralCompetent:textENG.max')),
});
