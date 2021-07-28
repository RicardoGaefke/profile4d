import React from 'react';
import { Typography, Grid } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation, withTranslation, useTranslation } from 'react-i18next';
import Styles from './Styles';
import MyImage from '../../../Utils/MyImage';
import setLanguage from './Language';

interface ShowImage {
  Alt: string;
  Src: string;
}

type Final = ShowImage & WithTranslation;

export default withTranslation()(
  (props: Final): React.ReactElement<Final> => {
    const classes = Styles({});
    const { t } = useTranslation('ShowPageImages');
    const {
      Alt, Src,
    } = props;
    setLanguage();

    return (
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          <MyImage
            src={Src}
            className={classes.imageSize}
            alt={Alt}
          />
          <Typography
            variant="h6"
            color="primary"
          >
            {t('ShowPageImages:upload')}
          </Typography>
        </Grid>
      </Grid>
    );
  },
);
