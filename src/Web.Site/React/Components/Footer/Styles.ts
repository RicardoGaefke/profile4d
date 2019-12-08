// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  footer: {}
}

export default makeStyles((theme: Theme): IStyles => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    // backgroundColor: 'rgba(255,255,255,0.05)',
    // backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : 'rgba(233,233,233,1)',
  },
}));
