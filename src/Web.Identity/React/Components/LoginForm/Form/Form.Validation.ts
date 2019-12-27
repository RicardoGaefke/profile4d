import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Email: Yup.string()
    .required(props.t('LoginForm:email.required'))
    .email(props.t('LoginForm:email.invalid')),
  Password: Yup.string()
    .required(props.t('LoginForm:password.required'))
    .min(6, props.t('LoginForm:password.min'))
    .max(20, props.t('LoginForm:password.max')),
});
