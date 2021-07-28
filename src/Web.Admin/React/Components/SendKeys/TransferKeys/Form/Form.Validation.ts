import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Email: Yup.string()
    .required(props.t('TransferKeys:email.required'))
    .email(props.t('TransferKeys:email.email')),
  ConfirmEmail: Yup.string()
    .required(props.t('TransferKeys:confirmEmail.required'))
    .oneOf([Yup.ref('Email')], props.t('TransferKeys:confirmEmail.confirm')),
  Keys: Yup.number()
    .required(props.t('TransferKeys:keys.required'))
    .min(1, props.t('TransferKeys:keys.invalid')),
});
