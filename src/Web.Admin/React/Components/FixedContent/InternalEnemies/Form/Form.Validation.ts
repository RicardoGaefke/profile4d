import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('StaticTrinityInternalEnemies:titlePT.required'))
    .min(5, props.t('StaticTrinityInternalEnemies:titlePT.min'))
    .max(95, props.t('StaticTrinityInternalEnemies:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('StaticTrinityInternalEnemies:titleENG.required'))
    .min(5, props.t('StaticTrinityInternalEnemies:titleENG.min'))
    .max(95, props.t('StaticTrinityInternalEnemies:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('StaticTrinityInternalEnemies:textPT.required'))
    .min(5, props.t('StaticTrinityInternalEnemies:textPT.min'))
    .max(8000, props.t('StaticTrinityInternalEnemies:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('StaticTrinityInternalEnemies:textENG.required'))
    .min(5, props.t('StaticTrinityInternalEnemies:textENG.min'))
    .max(8000, props.t('StaticTrinityInternalEnemies:textENG.max')),
});
