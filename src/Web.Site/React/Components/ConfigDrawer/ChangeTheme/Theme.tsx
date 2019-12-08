import React from 'react';
import {
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Divider,
} from '@material-ui/core';
import { useStateValue } from '../../../Initial/Context/StateProvider';

export default (): React.ReactElement<any> => {
  const [{ Theme }, dispatch] = useStateValue();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'changeTheme',
      value: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Escolha o tema
        </FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={Theme} onChange={handleChange}>
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
        </RadioGroup>
      </FormControl>
      <Divider />
    </>
  );
};
