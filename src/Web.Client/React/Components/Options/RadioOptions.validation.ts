import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Answer: Yup
    .string()
    .required(`${props.t('RadioOptions:error')}`),
});
