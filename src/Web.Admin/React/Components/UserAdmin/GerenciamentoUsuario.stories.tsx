import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import {
    TableHead, TableRow, TableCell, TableBody, Typography, Button, Grid, Table, Chip
  } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';

const App = (): React.ReactElement => (
    <MyThemeHoc>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome do usuário</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Licença</TableCell>
            <TableCell>Número da Licença</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Enviada</TableCell>
            <TableCell>Iniciada</TableCell>
            <TableCell>Bloqueada</TableCell>        
            <TableCell>Cancelar?</TableCell>
            <TableCell>Visualizar</TableCell>
            <TableCell>Informações</TableCell>
            <TableCell>Editar</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>
                Wanderson Henrique
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                wsantos@interdev.me
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
              Degustação
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                583d1312-98b1-42e6-b8c1-05953a4c7896
              </Typography>
            </TableCell>
            <TableCell>
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
              >
                <Chip 
                    label="Em Execução"
                    style={{ 
                        backgroundColor: '#FF8000', 
                        fontWeight: 'bold', 
                        color: "white", 
                        fontSize: 15, 
                        marginBottom: -4 
                    }} />
              </Grid>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: '#009900', fontWeight: 'bold' }}
              >
                <Grid>
                  <LockOpenIcon style={{ color: '#FFFFF', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
                title="Cancelar envio de chave"
              >
                <Grid>
                  <CancelIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                title="Abrir resultado"
                style={{ fontWeight: 'bold' }}
              >
                <Grid>
                  <VisibilityIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                title="Informações"
                style={{ fontWeight: 'bold' }}
              >
                <Grid>
                  <InfoIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                title="Editar informações"
                style={{ backgroundColor: '#263238', fontWeight: 'bold' }}
              >
                <Grid>
                  <EditIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Wanderson Henrique
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                wsantos@interdev.me
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
              Profissional
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                583d1312-98b1-42e6-b8c1-05953a4c7896
              </Typography>
            </TableCell>
            <TableCell>
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
              >
                <Button
                  variant="contained"
                  color="primary"
                  title="resultado"
                  style={{ backgroundColor: '#009900', fontWeight: 'bold' }}
                >
                  Resultado
                </Button>
              </Grid>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: '#FF0000', fontWeight: 'bold' }}
                title="Desbloquear"
              >
                <Grid>
                  <LockIcon style={{ color: '#FFFFF', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
                title="Cancelar envio de chave"
              >
                <Grid>
                  <CancelIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
              >
                <Grid>
                  <VisibilityOffIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                title="Informações"
                style={{ fontWeight: 'bold' }}
              >
                <Grid>
                  <InfoIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                title="Editar informações"
                style={{ backgroundColor: '#263238', fontWeight: 'bold' }}
              >
                <Grid>
                  <EditIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Wanderson Henrique
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                wsantos@interdev.me
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
              Avançada
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                583d1312-98b1-42e6-b8c1-05953a4c7896
              </Typography>
            </TableCell>
            <TableCell>
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
              >
                <Chip 
                    label="Não iniciado"
                    style={{ 
                        backgroundColor: '#808080', 
                        fontWeight: 'bold', 
                        color: "white", 
                        fontSize: 15, 
                        marginBottom: -4 
                    }} />
              </Grid>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: '#FF0000', fontWeight: 'bold' }}
                title="Desbloquear"
              >
                <Grid>
                  <LockIcon style={{ color: '#FFFFF', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
                title="Cancelar envio de chave"
              >
                <Grid>
                  <CancelIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
              >
                <Grid>
                  <VisibilityOffIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                title="Informações"
                style={{ fontWeight: 'bold' }}
              >
                <Grid>
                  <InfoIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                title="Editar informações"
                style={{ backgroundColor: '#263238', fontWeight: 'bold' }}
              >
                <Grid>
                  <EditIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Wanderson Henrique
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                wsantos@interdev.me
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
              Pessoal
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                583d1312-98b1-42e6-b8c1-05953a4c7896
              </Typography>
            </TableCell>
            <TableCell>
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
              >
                <Button
                  variant="contained"
                  color="primary"
                  title="resultado"
                  style={{ backgroundColor: '#009900', fontWeight: 'bold' }}
                >
                  Resultado
                </Button>
              </Grid>
            </TableCell>
            <TableCell>
              <Typography>
                5/21/2021
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                ---
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: '#FF0000', fontWeight: 'bold' }}
                title="Desbloquear"
              >
                <Grid>
                  <LockIcon style={{ color: '#FFFFF', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
                title="Cancelar envio de chave"
              >
                <Grid>
                  <CancelIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#E0E0E0' }}
              >
                <Grid>
                  <VisibilityOffIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                title="Informações"
                style={{ fontWeight: 'bold' }}
              >
                <Grid>
                  <InfoIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                title="Editar informações"
                style={{ backgroundColor: '#263238', fontWeight: 'bold' }}
              >
                <Grid>
                  <EditIcon style={{ fontSize: 20, marginBottom: -4 }} />
                </Grid>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
    </Table>
  </MyThemeHoc>
);

storiesOf('GerenciamentoUsuario', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
