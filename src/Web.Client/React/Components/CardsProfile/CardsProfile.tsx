import React from 'react';
import {
  Typography, CardContent, Card,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    font: 'Helvetica',
    borderRadius: 25,
  },
  title: {
    fontSize: 28,
    color: '#ffffff',
    font: 'Helvetica',
  },
});

export interface CardsProfileProps extends WithTranslation {
  CardsText: string;
  CardsProfileTitle: string
}

const CardsProfile = withTranslation()(
  (props: CardsProfileProps): JSX.Element => {
    const { CardsText, CardsProfileTitle } = props;

    const classes = useStyles();

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {CardsProfileTitle}
          </Typography>
          <Typography className={classes.title} color="textSecondary" align="center" gutterBottom>
            {CardsText}
          </Typography>
        </CardContent>
      </Card>
    );
  },
);

CardsProfile.displayName = 'CardsProfile';

export default CardsProfile;
