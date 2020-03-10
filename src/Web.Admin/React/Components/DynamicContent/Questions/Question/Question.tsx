/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, ListItem, Typography, ListItemAvatar, Avatar, Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../../../TypeScript/Interfaces/IQuestion';
import MyActive from '../Active/Active';

interface MyProps {
  question: IQuestion,
  number: number,
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
}

type IProps = WithTranslation & MyProps;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    const {
      // eslint-disable-next-line no-unused-vars
      t, number, question, handleChange,
    } = props;
    const {
      Title_PT, Text_PT, Title_ENG, Text_ENG, Guid, Active,
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
              <Button
                variant="contained"
                title="Edit"
                startIcon={<EditIcon />}
                component={Link}
                to={`/dynamicContent/questions/edit/${Guid}`}
              >
                Edit
              </Button>
              <MyActive active={Active} handleChange={handleChange} />
            </>
          </Grid>
        </Grid>
      </ListItem>
    );
  },
);
