import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinityBehavioralSabotage:titlePT.required'))
    .min(5, props.t('StaticTrinityBehavioralSabotage:titlePT.min'))
    .max(95, props.t('StaticTrinityBehavioralSabotage:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinityBehavioralSabotage:titleENG.required'))
    .min(5, props.t('StaticTrinityBehavioralSabotage:titleENG.min'))
    .max(95, props.t('StaticTrinityBehavioralSabotage:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinityBehavioralSabotage:textPT.required'))
    .min(5, props.t('StaticTrinityBehavioralSabotage:textPT.min'))
    .max(8000, props.t('StaticTrinityBehavioralSabotage:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinityBehavioralSabotage:textENG.required'))
    .min(5, props.t('StaticTrinityBehavioralSabotage:textENG.min'))
    .max(8000, props.t('StaticTrinityBehavioralSabotage:textENG.max')),
});
