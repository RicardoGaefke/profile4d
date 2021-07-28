import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Box, Typography, LinearProgress } from '@material-ui/core';

export interface ProgressBarProps extends WithTranslation {
  Completed: number;
  Total: number;
}

const ProgressBar = withTranslation()(
  (props: ProgressBarProps): JSX.Element => {
    const { Completed, Total } = props;

    const [percent, setPercent] = useState<number>(0);

    useEffect((): void => {
      const calc = Number.isNaN(Completed / Total * 100) ? 0 : Completed / Total * 100;
      setPercent(calc);
    }, []);

    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={percent} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${percent.toFixed(0).toString()}%`}</Typography>
        </Box>
      </Box>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
