import React from 'react';
import {
  Typography, Card, CardMedia, CardContent,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Styles from './Styles';

interface IProps {
  image: string,
  alt: string,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const classes = Styles({});
  const { alt } = props;

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Skeleton
          variant="rect"
          width="100%"
          height={200}
          title={alt}
          animation="wave"
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
