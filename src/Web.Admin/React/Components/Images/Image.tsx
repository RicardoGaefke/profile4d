import React from 'react';
import {
  Typography, Card, CardMedia, CardContent,
} from '@material-ui/core';
import Styles from './Styles';
import MyImage from '../../Utils/MyImage';

interface IProps {
  image: string,
  alt: string,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const classes = Styles({});
  const { image, alt } = props;

  return (
    <Card className={classes.card}>
      <CardMedia>
        <MyImage
          src={image}
          className={classes.image}
          alt={alt}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {alt}
        </Typography>
      </CardContent>
    </Card>
  );
};
