import React, { useState } from 'react';
import {
  Box, Typography, Tab, Tabs, AppBar,
} from '@material-ui/core';
import useStyles from '../Styles';
// eslint-disable-next-line no-unused-vars
import { IEmailRow } from '../Table/IProps';
import Table from '../Table/Table';

interface TabPanelProps {
  index: any;
  value: any;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

const a11yProps = (index: any): {} => (
  {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
);

const TabPanel = (props: TabPanelProps): React.ReactElement => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface IProps {
  mi4d: IEmailRow[];
  profile4d: IEmailRow[];
}

export default (props: IProps): React.ReactElement => {
  const classes = useStyles();
  const { mi4d, profile4d } = props;

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabs}>
      <AppBar position="static" color="inherit">
        <Tabs value={value} onChange={handleChange} aria-label="Lista de emails">
          <Tab label="Profile4D" {...a11yProps(0)} />
          <Tab label="MI4D" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Table rows={profile4d} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table rows={mi4d} />
        </TabPanel>
      </AppBar>
    </div>
  );
};
