import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Email: Yup.string()
    .required(props.t('SendKey:email.required'))
    .email(props.t('SendKey:email.email')),
  ConfirmEmail: Yup.string()
    .required(props.t('SendKey:confirmEmail.required'))
    .oneOf([Yup.ref('Email')], props.t('SendKey:confirmEmail.confirm')),
});
