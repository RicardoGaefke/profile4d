// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import setLanguage from './Language';

interface MyProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  Active: boolean,
  Guid: string,
}

type IProps = WithTranslation & MyProps;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    setLanguage();

    const {
      t, handleChange, Active, Guid,
    } = props;

    const [state, setState] = useState(Active);

    // eslint-disable-next-line no-unused-vars
    const onChange = (event: ChangeEvent<HTMLInputElement>, checked): void => {
      setState(event.target.checked);
      handleChange(event, checked);
    };

    return (
      <FormControlLabel
        control={
          <Checkbox checked={state} onChange={onChange} value={Guid} />
        }
        label={t('DynamicActive:title')}
      />
    );
  },
);
