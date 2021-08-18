import React, { useEffect, useState } from 'react';
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


export interface SelectLicencaProps extends WithTranslation {
  keyGuid: string;
  keyType: number;
  onAlterar: (guid: string, type: number) => void;
}

const SelectLicenca = withTranslation()(
  (props: SelectLicencaProps): JSX.Element => {
    const { keyGuid, keyType, onAlterar } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [guid, setGuid] = useState<string>(keyGuid);
    const [type, setType] = useState<number>(keyType);

    useEffect((): void => {
      setGuid(guid);
      setType(type);
    }, []);

    const handleClickOpen = (): void => {
      setOpen(true);
    };

    const handleClose = (): void => {
      setOpen(false);
    };

    const save = (): void => {
      setOpen(false);
      onAlterar(guid, type);
    };

    return (
      <div>
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
              <RadioGroup
                aria-label="Tipo de licença"
                name="keyType"
                value={type.toString()}
                onChange={(e): void => { setType(parseInt(e.target.value, 10)); }}
              >
                <FormControlLabel value="1" control={<Radio />} label="Degustação" />
                <FormControlLabel value="2" control={<Radio />} label="Pessoal" />
                <FormControlLabel value="3" control={<Radio />} label="Profissional" />
                <FormControlLabel value="4" control={<Radio />} label="Avançada" />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={save} color="primary" autoFocus>
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
