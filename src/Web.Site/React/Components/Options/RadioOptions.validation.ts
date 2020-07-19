import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  option: Yup
    .string()
    .required(`${props.t('RadioOptions:error')}`),
});
