import React from 'react';
import {
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Divider,
} from '@material-ui/core';
import { useStateValue } from '../../../Initial/Context/StateProvider';

export default (): React.ReactElement<any> => {
  const [{ Language }, dispatch] = useStateValue();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'changeLanguage',
      value: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Escolha o idioma
        </FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={Language} onChange={handleChange}>
          <FormControlLabel value="PT" control={<Radio />} label="Português" />
          <FormControlLabel value="ENG" control={<Radio />} label="English" />
        </RadioGroup>
      </FormControl>
      <Divider />
    </>
  );
};
