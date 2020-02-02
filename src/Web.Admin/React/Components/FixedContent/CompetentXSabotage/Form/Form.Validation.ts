import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticCompetentXSabotage:titlePT.required'))
    .min(5, props.t('StaticCompetentXSabotage:titlePT.min'))
    .max(95, props.t('StaticCompetentXSabotage:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticCompetentXSabotage:titleENG.required'))
    .min(5, props.t('StaticCompetentXSabotage:titleENG.min'))
    .max(95, props.t('StaticCompetentXSabotage:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticCompetentXSabotage:textPT.required'))
    .min(5, props.t('StaticCompetentXSabotage:textPT.min'))
    .max(8000, props.t('StaticCompetentXSabotage:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticCompetentXSabotage:textENG.required'))
    .min(5, props.t('StaticCompetentXSabotage:textENG.min'))
    .max(8000, props.t('StaticCompetentXSabotage:textENG.max')),
});
