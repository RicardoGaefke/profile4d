import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Email: Yup.string()
    .required(props.t('ChangeEmailForm:email.required'))
    .email(props.t('ChangeEmailForm:email.invalid')),
  ConfirmEmail: Yup.string()
    .required(props.t('ChangeEmailForm:confirmEmail.required'))
    .oneOf([Yup.ref('Email')], props.t('ChangeEmailForm:confirmEmail.invalid')),
  Password: Yup.string()
    .required(props.t('ChangeEmailForm:password.required'))
    .min(6, props.t('ChangeEmailForm:password.min'))
    .max(20, props.t('ChangeEmailForm:password.max')),
});
