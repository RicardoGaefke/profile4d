import React from 'react';
import { Box } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const {
    children, index, value, ...rest
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index.toString()}`}
      aria-labelledby={`full-width-tab-${index.toString()}`}
      {...rest}
    >
      {value === index && (
        <Box
          p={3}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.defaultProps = {
  children: null,
  dir: 'rtl',
};

TabPanel.displayName = 'TabPanel';

export default TabPanel;
