import {
  Container, Table, TableHead, TableRow, Typography, TableCell, TableBody, Button, Grid,
  Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText,
} from '@material-ui/core';
import React, { useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { SyncAlt, SupervisorAccount, VpnKey } from '@material-ui/icons';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { useHistory } from 'react-router-dom';
import useStyles from './Styles';
import { IUser } from '../../../../TypeScript/Interfaces/IUser';
import Pagination from '../Pagination/Pagination';
import changeUsers from './changeUser';

export interface UsersAdminPageProps extends WithTranslation, WithSnackbarProps {
  users: IUser[];
  updatePage: (newPage: string) => void;
  getData: () => void;
}

const UsersAdminPage = withTranslation()(
  (props: UsersAdminPageProps): JSX.Element => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      t, users, updatePage, enqueueSnackbar, getData,
    } = props;
    const classes = useStyles();

    const history = useHistory();

    const navigateToAdminUser = (userGuid: string): void => { history.push(`/userInfo/${userGuid}`); };

    const [editing, setEditing] = useState<boolean>(false);
    const [editingAction, setEditingAction] = useState<number>(0);
    const [userGuid, setUserGuid] = useState<string>('');

    const changeEditing = (): void => { setEditing(!editing); };

    const confirmEditing = async (): Promise<void> => {
      await changeUsers(userGuid, editingAction)
        .then((data): void => {
          if (data.Success) {
            setUserGuid('');
            setEditingAction(0);
            setEditing(false);
            enqueueSnackbar('Usuário atualizado com sucesso!', {
              variant: 'success',
            });
            getData();
          } else {
            setUserGuid('');
            setEditingAction(0);
            setEditing(false);
            enqueueSnackbar('Desculpe, mas houve um erro!', {
              variant: 'error',
            });
          }
        })
        .catch((): void => {
          setUserGuid('');
          setEditingAction(0);
          setEditing(false);
          enqueueSnackbar('Desculpe, mas houve um erro!', {
            variant: 'error',
          });
        });
    };

    return (
      <Container className={classes.root}>
        <Typography variant="h3" align="center" gutterBottom>
          Administração de usuários
        </Typography>
        <Pagination
          Last={1}
          Page={1}
          onChange={updatePage}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome do usuário</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>Recebidas</TableCell>
              <TableCell>Enviadas</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user): JSX.Element => (
                <TableRow key={user.Guid}>
                  <TableCell>
                    <Button
                      onClick={(): void => { navigateToAdminUser(user.Guid as string); }}
                      title="Ver informações do usuário"
                    >
                      {user.Name}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={(): void => { navigateToAdminUser(user.Guid as string); }}
                      title="Ver informações do usuário"
                    >
                      {user.Email}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {(user.Admin) ? 'Admin' : 'User'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {(user.Active) ? 'Sim' : 'Não'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {user.Recebidas || 0}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {user.Enviadas || 0}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      title="Ativar/Desativar usuário"
                      style={{ fontWeight: 'bold' }}
                      onClick={(): void => {
                        setEditingAction(1);
                        setUserGuid(user.Guid as string);
                        setEditing(true);
                      }}
                    >
                      <Grid>
                        <SyncAlt style={{ fontSize: 20, marginBottom: -4 }} />
                      </Grid>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      title="Ativar/Desativar admin"
                      style={{ fontWeight: 'bold' }}
                      onClick={(): void => {
                        setEditingAction(2);
                        setUserGuid(user.Guid as string);
                        setEditing(true);
                      }}
                    >
                      <Grid>
                        <SupervisorAccount style={{ fontSize: 20, marginBottom: -4 }} />
                      </Grid>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      title="Gerar nova senha"
                      style={{ fontWeight: 'bold' }}
                      onClick={(): void => {
                        setEditingAction(3);
                        setUserGuid(user.Guid as string);
                        setEditing(true);
                      }}
                    >
                      <Grid>
                        <VpnKey style={{ fontSize: 20, marginBottom: -4 }} />
                      </Grid>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <Pagination
          Last={1}
          Page={1}
          onChange={updatePage}
        />
        <Dialog
          open={editing}
          onClose={changeEditing}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Deseja realmente alterar as informações deste usuário?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Alterando as propriedades de um usuário fará com que ele seja imediatamente desconectado.
              Tem certeza que deseja continuar?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={changeEditing} color="secondary">
              Cancelar
            </Button>
            <Button
              color="primary"
              autoFocus
              onClick={(): void => {
                changeEditing();
                confirmEditing();
              }}
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  },
);

UsersAdminPage.displayName = 'UsersAdminPage';

export default withSnackbar(UsersAdminPage);
