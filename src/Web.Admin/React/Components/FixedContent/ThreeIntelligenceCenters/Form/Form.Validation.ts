import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticThreeIntelligenceCenters:titlePT.required'))
    .min(5, props.t('StaticThreeIntelligenceCenters:titlePT.min'))
    .max(95, props.t('StaticThreeIntelligenceCenters:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticThreeIntelligenceCenters:titleENG.required'))
    .min(5, props.t('StaticThreeIntelligenceCenters:titleENG.min'))
    .max(95, props.t('StaticThreeIntelligenceCenters:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticThreeIntelligenceCenters:textPT.required'))
    .min(5, props.t('StaticThreeIntelligenceCenters:textPT.min'))
    .max(8000, props.t('StaticThreeIntelligenceCenters:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticThreeIntelligenceCenters:textENG.required'))
    .min(5, props.t('StaticThreeIntelligenceCenters:textENG.min'))
    .max(8000, props.t('StaticThreeIntelligenceCenters:textENG.max')),
});
