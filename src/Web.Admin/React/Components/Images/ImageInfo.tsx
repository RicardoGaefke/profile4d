import React from 'react';
import {
  Typography, Card, CardMedia, CardContent, Divider,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IImage } from '../../../../TypeScript/Interfaces/IImage';
import MyImage from '../../Utils/MyImage';
import Styles from './Styles';

export default (props: IImage): React.ReactElement<IImage> => {
  const classes = Styles({});
  const {
    Alt, Src, Mime, Height, Width, Size,
  } = props;

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
          Tipo:
          <strong>
            {` ${Mime}`}
          </strong>
        </Typography>
        <Typography variant="body1">
          Tamanho:
          <strong>
            {` ${Size} bytes`}
          </strong>
        </Typography>
        <Typography variant="body1">
          Largura:
          <strong>
            {` ${Width} pixels`}
          </strong>
        </Typography>
        <Typography variant="body1">
          Altura:
          <strong>
            {` ${Height} pixels`}
          </strong>
        </Typography>
      </CardContent>
    </Card>
  );
};
