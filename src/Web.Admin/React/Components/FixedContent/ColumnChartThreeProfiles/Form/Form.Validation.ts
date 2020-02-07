import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticColumnChartThreeProfiles:titlePT.required'))
    .min(5, props.t('StaticColumnChartThreeProfiles:titlePT.min'))
    .max(95, props.t('StaticColumnChartThreeProfiles:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticColumnChartThreeProfiles:titleENG.required'))
    .min(5, props.t('StaticColumnChartThreeProfiles:titleENG.min'))
    .max(95, props.t('StaticColumnChartThreeProfiles:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticColumnChartThreeProfiles:textPT.required'))
    .min(5, props.t('StaticColumnChartThreeProfiles:textPT.min'))
    .max(8000, props.t('StaticColumnChartThreeProfiles:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticColumnChartThreeProfiles:textENG.required'))
    .min(5, props.t('StaticColumnChartThreeProfiles:textENG.min'))
    .max(8000, props.t('StaticColumnChartThreeProfiles:textENG.max')),
});
