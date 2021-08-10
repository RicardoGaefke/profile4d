/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Button, Grid,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './Styles';


export interface SelectLicencaProps extends WithTranslation {
    Completed: number;
    Total: number;
  }

const SelectLicenca = withTranslation()(
  // eslint-disable-next-line no-unused-vars
  (props: SelectLicencaProps): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClickOpen = () => {
      setOpen(true);
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClose = () => {
      setOpen(false);
    };

    const classes = useStyles();

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function StyledRadio() {
      return (
        <Radio
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          {...props}
        />
      );
    }

    return (
      <div>
        {/*
        <div>
          <Chip
            icon={<EditIcon />}
            label="Licença Degustação"
            color="primary"
            style={{
              backgroundColor: '#009900',
              fontWeight: 'bold',
              marginBottom: 9,
              marginTop: 40,
              fontSize: 15,
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{
            whiteSpace: 'nowrap',
            fontSize: 9,
          }}
        >
          Alterar licença
        </Button>
        <Chip
          color="primary"
          onDelete={handleClickOpen}
          deleteIcon={<EditIcon />}
          style={{
            backgroundColor: '#009900',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        />
        */}
        <Button
          variant="contained"
          color="secondary"
          style={{
            backgroundColor: '#370060',
          }}
          title="Selecao de licencas"
          onClick={handleClickOpen}
        >
          <Grid>
            <EditIcon style={{ color: '#FFFFF', fontSize: 20, marginBottom: -4 }} />
          </Grid>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Deseja alterar o tipo da licença?</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset">
              <FormLabel component="legend">Licença</FormLabel>
              <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                <FormControlLabel value="Degustação" control={<StyledRadio />} label="Degustação" />
                <FormControlLabel value="Pessoal" control={<StyledRadio />} label="Pessoal" />
                <FormControlLabel value="Profissional" control={<StyledRadio />} label="Profissional" />
                { /* <FormControlLabel
                  value="disabled"
                  disabled
                  control={<StyledRadio />}
                  label="(Disabled option)"
               /> */}
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  },
);


SelectLicenca.displayName = 'SelectLicenca';

export default SelectLicenca;
