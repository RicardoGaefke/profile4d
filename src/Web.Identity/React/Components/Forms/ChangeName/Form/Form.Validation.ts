import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Name: Yup.string()
    .required(props.t('ChangeNameForm:name.required'))
    .min(6, props.t('ChangeNameForm:name.min'))
    .max(95, props.t('ChangeNameForm:name.max')),
  Password: Yup.string()
    .required(props.t('ChangeNameForm:password.required'))
    .min(6, props.t('ChangeNameForm:password.min'))
    .max(20, props.t('ChangeNameForm:password.max')),
});
