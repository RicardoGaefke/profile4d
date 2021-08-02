import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
// eslint-disable-next-line no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
import Axios from '../../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import setLanguage from './Language';

const RequestKey = (props: WithTranslation & WithSnackbarProps): JSX.Element => {
  const { t, enqueueSnackbar } = props;
  setLanguage();
  const [dialog, setDialog] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleDialog = (): void => {
    setDialog(!dialog);
    setPhoneNumber('');
  };

  const handleConfirm = async (): Promise<void> => {
    await Axios(window.location.href).get<IBasicReturn>(`RequestKeys/${phoneNumber}`).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('RequestKey:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('RequestKey:feedback.failure'), {
          variant: 'error',
        });
      }
      handleDialog();
    }).catch((): void => {
      enqueueSnackbar(t('RequestKey:feedback.failure'), {
        variant: 'error',
      });
    });
    handleDialog();
  };

  return (
    <>
      <Button
        variant="contained"
        color="default"
        startIcon={<Add />}
        title={t('RequestKey:title')}
        onClick={handleDialog}
      >
        {t('RequestKey:text')}
      </Button>
      <Dialog open={dialog} onClose={handleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{t('RequestKey:request.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('RequestKey:request.text')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            title={t('RequestKey:phone.title')}
            label={t('RequestKey:phone.text')}
            fullWidth
            value={phoneNumber}
            onChange={(e): void => setPhoneNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} title={t('RequestKey:cancel.title')} color="secondary">
            {t('RequestKey:cancel.text')}
          </Button>
          <Button
            onClick={handleConfirm}
            title={t('RequestKey:confirm.title')}
            color="primary"
          >
            {t('RequestKey:confirm.text')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const RequestKeyFull = withTranslation()(withSnackbar(RequestKey));

RequestKeyFull.displayName = 'RequestKey';

export default RequestKeyFull;
