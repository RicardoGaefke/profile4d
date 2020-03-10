// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { FormControlLabel, Checkbox } from '@material-ui/core';

interface MyProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  active: boolean,
}

type IProps = WithTranslation & MyProps;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    // eslint-disable-next-line no-unused-vars
    const { t, handleChange, active } = props;

    return (
      <FormControlLabel
        control={
          <Checkbox checked={active} onChange={handleChange} value="active" />
        }
        label="Active"
      />
    );
  },
);
