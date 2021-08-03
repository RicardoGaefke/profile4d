import React, { useState } from 'react';
import {
  Box, Button, Container, Typography, TextField,
} from '@material-ui/core';
import {
  ArrowBack, ArrowForward, FirstPage, LastPage,
} from '@material-ui/icons';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import useStyles from './Styles';

export interface PaginationProps extends WithTranslation {
  Page: number;
  Last: number;
  onChange: (page: string) => void;
}

const Pagination = withTranslation()(
  (props: PaginationProps): JSX.Element => {
    const {
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      t, Page, Last, onChange,
    } = props;
    const classes = useStyles({});

    const [temporaryPage, setTemporaryPage] = useState(Page);

    return (
      <Container maxWidth="xl" className={classes.root}>
        <Box>
          <Button
            variant="text"
            title="Primeira página"
            disabled={!(temporaryPage !== 1)}
            onClick={(): void => {
              onChange('1');
              setTemporaryPage(1);
            }}
          >
            <FirstPage />
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            title="Anterior"
            disabled={(temporaryPage === 1)}
            onClick={(): void => {
              if (temporaryPage > 1) {
                onChange((temporaryPage - 1).toString());
                setTemporaryPage(temporaryPage - 1);
              } else if (temporaryPage <= 1) {
                setTemporaryPage(1);
              }
            }}
          >
            <ArrowBack />
          </Button>
        </Box>
        <Box>
          <Typography>Página</Typography>
        </Box>
        <Box>
          <TextField
            variant="outlined"
            value={temporaryPage}
            size="small"
            className={classes.textBox}
            aria-label="Page number"
            title="Page number"
            type="number"
            InputProps={{ inputProps: { min: 1, max: Last } }}
            onChange={
              (evt: React.ChangeEvent<HTMLInputElement>): void => {
                if (evt.target.value === '' || evt.target.value === undefined) {
                  setTemporaryPage(1);
                } else {
                  setTemporaryPage(
                    parseFloat(evt.target.value),
                  );
                }
              }
            }
            onKeyUp={
              (evt: React.KeyboardEvent<HTMLInputElement>): void => {
                if (evt.key === 'Enter' && temporaryPage >= Last) {
                  onChange(Last.toString());
                  setTemporaryPage(Last);
                } else if (evt.key === 'Enter' && temporaryPage < Last) {
                  onChange(temporaryPage.toString());
                  setTemporaryPage(temporaryPage);
                }
              }
            }
          />
        </Box>
        <Box>
          <Typography>de 5</Typography>
        </Box>
        <Box>
          <Button
            variant="text"
            title="Seguinte"
            disabled={(temporaryPage === Last)}
            onClick={(): void => {
              if (temporaryPage < Last) {
                onChange((temporaryPage + 1).toString());
                setTemporaryPage(temporaryPage + 1);
              } else if (temporaryPage >= Last) {
                setTemporaryPage(Last);
              }
            }}
          >
            <ArrowForward />
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            title="Última página"
            disabled={(temporaryPage === Last)}
            onClick={(): void => {
              onChange(Last.toString());
              setTemporaryPage(Last);
            }}
          >
            <LastPage />
          </Button>
        </Box>
      </Container>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
