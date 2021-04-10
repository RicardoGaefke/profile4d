import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IImage } from '../../../../TypeScript/Interfaces/IImage';
// import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';

export interface FilterImageProps {
  images: IImage[];
  id: number;
}

const FilterImage = (props: FilterImageProps): JSX.Element => {
  const { id, images } = props;
  // const [{ Language }] = useStateValue();
  const Language: string = 'PT';
  const classes = useStyles();
  const image = images.filter((img): boolean => img.Id === id)[0];

  return (
    <div className={classes.item}>
      <img
        src={`https://api.staging.profile4d.com/Image/Show/${image.Src}.png`}
        alt={(Language === 'ENG') ? image.Alt_ENG : image.Alt_PT}
        title={(Language === 'ENG') ? image.Alt_ENG : image.Alt_PT}
        className={classes.image}
      />
    </div>
  );
};

FilterImage.displayName = 'FilterImage';

export default FilterImage;
