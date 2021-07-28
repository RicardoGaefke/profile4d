import React, { useState } from 'react';
import {
  Typography, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ISelect } from './ISelect';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SelectValues, { ITemporarySelect } from './TempSelect';
import setLanguage from '../Questions/Language';
import useStyles from './Style';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<HTMLElement> => {
    const { t } = props;
    setLanguage();
    const classes = useStyles();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectChanges, setSelectChanges] = useState({} as ISelect);

    return (
      <div className={classes.root}>
        <Typography
          component="p"
          className={classes.title}
        >
          {`${t('DynamicQuestions:subtitle')}:`}
        </Typography>
        <FormControl
          margin="dense"
          variant="outlined"
          fullWidth
        >
          <InputLabel>
            {t('DynamicQuestions:label')}
          </InputLabel>
          <Select
            label="Categories"
            value={selectChanges.categories}
            onChange={(value: any): void => {
              setSelectChanges(value);
            }}
            inputProps={{
              id: 'selectChanges.categories',
              name: 'selectChanges.categories',
            }}
          >
            {
              SelectValues.map((s: ITemporarySelect): React.ReactElement<HTMLElement> => (
                <MenuItem key={s.id} value={s.name}>
                  {s.name}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    );
  },
);
