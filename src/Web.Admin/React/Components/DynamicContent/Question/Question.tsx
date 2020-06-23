/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent } from 'react';
import {
  Grid, ListItem, Typography, ListItemAvatar, Avatar,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import EditButton from '../EditButton/EditButton';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../../TypeScript/Interfaces/IQuestion';
import MyActive from '../Active/Active';

interface MyProps {
  to: string,
  question: IQuestion,
  number: number,
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
}

type IProps = WithTranslation & MyProps;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    const {
      // eslint-disable-next-line no-unused-vars
      t, number, question, handleChange, to,
    } = props;
    const {
      Title_PT, Text_PT, Title_ENG, Text_ENG,
      Guid, Active, Category,
    } = question;

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {number.toString()}
          </Avatar>
        </ListItemAvatar>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            md={5}
          >
            <Typography variant="h5">
              {Title_PT}
            </Typography>
            <Typography variant="body1">
              {Text_PT}
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
          >
            <Typography variant="h5">
              {Title_ENG}
            </Typography>
            <Typography variant="body1">
              {Text_ENG}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
          >
            <>
              <EditButton to={`/dynamicContent/${to}/edit/${Guid}`} />
              <MyActive Active={Active} handleChange={handleChange} Guid={Guid} />
              <br />
              {Category}
            </>
          </Grid>
        </Grid>
      </ListItem>
    );
  },
);
