import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Email: Yup.string()
    .required(props.t('ForgotForm:email.required'))
    .email(props.t('ForgotForm.Required')),
});
