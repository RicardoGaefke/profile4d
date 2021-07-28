import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Password: Yup.string()
    .required(props.t('ChangePasswordForm:password.required'))
    .min(6, props.t('ChangePasswordForm:password.min'))
    .max(20, props.t('ChangePasswordForm:password.max')),
  NewPassword: Yup.string()
    .required(props.t('ChangePasswordForm:password.required'))
    .min(6, props.t('ChangePasswordForm:password.min'))
    .max(20, props.t('ChangePasswordForm:password.max')),
  ConfirmPassword: Yup.string()
    .required(props.t('ChangePasswordForm:confirmPassword.required'))
    .oneOf([Yup.ref('NewPassword')], props.t('ChangePasswordForm:confirmPassword.invalid')),
});
