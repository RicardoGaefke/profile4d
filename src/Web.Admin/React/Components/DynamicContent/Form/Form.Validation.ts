import * as Yup from 'yup';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation } from 'react-i18next';

export default (props: WithTranslation): object => Yup.object().shape({
  Title_PT: Yup.string()
    .required(props.t('DynamicForm:titlePT.required'))
    .min(3, props.t('DynamicForm:titlePT.min'))
    .max(95, props.t('DynamicForm:titlePT.max')),
  Title_ENG: Yup.string()
    .required(props.t('DynamicForm:titleENG.required'))
    .min(3, props.t('DynamicForm:titleENG.min'))
    .max(95, props.t('DynamicForm:titleENG.max')),
  Text_PT: Yup.string()
    .required(props.t('DynamicForm:textPT.required'))
    .min(5, props.t('DynamicForm:textPT.min'))
    .max(8000, props.t('DynamicForm:textPT.max')),
  Text_ENG: Yup.string()
    .required(props.t('DynamicForm:textENG.required'))
    .min(5, props.t('DynamicForm:textENG.min'))
    .max(8000, props.t('DynamicForm:textENG.max')),
});
