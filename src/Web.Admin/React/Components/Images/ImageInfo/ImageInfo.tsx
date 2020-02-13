import React from 'react';
import {
  Typography, Card, CardMedia, CardContent, Divider,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { IImage } from '../../../../../TypeScript/Interfaces/IImage';
import setLanguage from './Language';
import Styles from '../Styles';
import MyImage from '../../../Utils/MyImage';

type IInfo = IImage & WithTranslation;

export default withTranslation()(
  (props: IInfo): React.ReactElement<IInfo> => {
    const classes = Styles({});
    const { t } = useTranslation('InfoPageImages');
    const {
      Alt, Src, Mime, Height, Width, Size,
    } = props;
    setLanguage();

    return (
      <Card className={classes.card}>
        <CardMedia>
          <MyImage
            src={Src}
            className={classes.image}
            alt={Alt}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2">
            {Alt}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {t('InfoPageImages:type')}
            <strong>
              {` ${Mime}`}
            </strong>
          </Typography>
          <Typography variant="body1">
            {t('InfoPageImages:size')}
            <strong>
              {` ${Size} bytes`}
            </strong>
          </Typography>
          <Typography variant="body1">
            {t('InfoPageImages:width')}
            <strong>
              {` ${Width} pixels`}
            </strong>
          </Typography>
          <Typography variant="body1">
            {t('InfoPageImages:height')}
            <strong>
              {` ${Height} pixels`}
            </strong>
          </Typography>
        </CardContent>
      </Card>
    );
  },
);
