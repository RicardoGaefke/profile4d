import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    Typography, Button, Grid,
  } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';

const App = (): React.ReactElement => (
    <MyThemeHoc>
        <TableHead>
            <TableRow>
                <TableCell>email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Bloqueada</TableCell>
                <TableCell>&nbsp;</TableCell>
            </TableRow>        
        </TableHead>
        <TableBody>
            <TableRow >
                <TableCell>
                    <Typography>
                      wsantos@interdev.me
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
                      >
                        Resultado
                      </Button>
                    </Grid>
                  </TableCell>
                  <TableCell>
                      <Button
                        variant="contained"
                        color="default"
                      >
                        Desbloquear
                      </Button>
                  </TableCell>
                  <TableCell>
                        <Button
                          variant="contained"
                          color="default"
                        >
                          Cancelar
                        </Button>
                  </TableCell>
            </TableRow>
        </TableBody>         
  </MyThemeHoc>
);

storiesOf('ListaDeLicença', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
