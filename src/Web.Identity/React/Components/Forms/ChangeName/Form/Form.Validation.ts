import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Name: Yup.string()
    .required(props.t('CreateUserForm:name.required'))
    .min(6, props.t('CreateUserForm:name.min'))
    .max(20, props.t('CreateUserForm:name.max')),
  Password: Yup.string()
    .required(props.t('CreateUserForm:password.required'))
    .min(6, props.t('CreateUserForm:password.min'))
    .max(20, props.t('CreateUserForm:password.max')),
});
