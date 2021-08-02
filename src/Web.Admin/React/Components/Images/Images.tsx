import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Card, CardMedia, CardContent,
  Grid,
} from '@material-ui/core';
import setLanguage from './Language';
import Styles from './Styles';
import MyImage from '../../Utils/MyImage';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const { t } = props;
    const classes = Styles({});

    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.card}>
            <CardMedia>
              <MyImage
                src="https://api.staging.profile4d.com/firstpage/logo"
                className={classes.image}
                alt={t('FirstPageImages:logo')}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t('FirstPageImages:logo')}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardMedia>
              <MyImage
                src="https://api.staging.profile4d.com/firstpage/logo"
                className={classes.image}
                alt={t('FirstPageImages:logo')}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t('FirstPageImages:logo')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  },
);
