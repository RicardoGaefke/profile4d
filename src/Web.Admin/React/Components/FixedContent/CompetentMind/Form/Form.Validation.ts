import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticCompetentMind:titlePT.required'))
    .min(5, props.t('StaticCompetentMind:titlePT.min'))
    .max(95, props.t('StaticCompetentMind:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticCompetentMind:titleENG.required'))
    .min(5, props.t('StaticCompetentMind:titleENG.min'))
    .max(95, props.t('StaticCompetentMind:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticCompetentMind:textPT.required'))
    .min(5, props.t('StaticCompetentMind:textPT.min'))
    .max(8000, props.t('StaticCompetentMind:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticCompetentMind:textENG.required'))
    .min(5, props.t('StaticCompetentMind:textENG.min'))
    .max(8000, props.t('StaticCompetentMind:textENG.max')),
});
