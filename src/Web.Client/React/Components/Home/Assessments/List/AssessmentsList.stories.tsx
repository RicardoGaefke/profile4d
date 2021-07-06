import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import {
  TableHead, TableRow, TableCell, TableBody,
  Typography, Button,
} from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import MyThemeHoc from '../../../../Initial/Theme/StoryBookHOC';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <TableHead>
      <TableRow>
        <TableCell>Enviado por </TableCell>
        <TableCell>ID</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Disponível?</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Typography>
            wsantos@interdev.me
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            1c52ce92-adec-46aa-baf5-49feed1d50f
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Completa
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Aguardando liberação
          </Typography>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            endIcon={<CloudDownload />}
            style={{ fontWeight: 'bold' }}
          >
            Relatório
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography>
            csantos@interdev.me
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            1c52ce92-adec-46aa-baf5-49feed1d50f
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Incompleta
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Aguardando liberação
          </Typography>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="default"
            style={{ fontWeight: 'bold' }}
          >
            Continuar
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography>
            csantos@interdev.me
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            1c52ce92-adec-46aa-baf5-49feed1d50f
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Incompleta
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Aguardando liberação
          </Typography>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="default"
            style={{ fontWeight: 'bold' }}
          >
            Iniciar
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </MyThemeHoc>
);

storiesOf('AssessmentsList', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
