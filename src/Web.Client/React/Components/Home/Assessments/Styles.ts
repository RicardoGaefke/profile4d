// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  tab: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    width: '100%',
  },
  tab: {
    borderBottom: `solid 1px ${(theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main}`,
    borderLeft: `solid 1px ${(theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main}`,
    borderRight: `solid 1px ${(theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main}`,
  },
}));
