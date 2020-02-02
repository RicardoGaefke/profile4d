import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticEnergySpikes:titlePT.required'))
    .min(5, props.t('StaticEnergySpikes:titlePT.min'))
    .max(95, props.t('StaticEnergySpikes:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticEnergySpikes:titleENG.required'))
    .min(5, props.t('StaticEnergySpikes:titleENG.min'))
    .max(95, props.t('StaticEnergySpikes:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticEnergySpikes:textPT.required'))
    .min(5, props.t('StaticEnergySpikes:textPT.min'))
    .max(8000, props.t('StaticEnergySpikes:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticEnergySpikes:textENG.required'))
    .min(5, props.t('StaticEnergySpikes:textENG.min'))
    .max(8000, props.t('StaticEnergySpikes:textENG.max')),
});
