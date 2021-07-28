import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  AppBar, Tabs, Tab, Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import TabPanel from './TabPanel';
import useStyles from './Styles';
import setLanguage from './Language';
import AssessmentsList from './List/AssessmentsList';

const Assessment = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    const { t } = props;

    setLanguage();

    const [value, setValue] = useState<number>(0);

    const classes = useStyles();

    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => setValue(newValue);

    const handleChangeIndex = (index: number): void => setValue(index);

    const a11yProps = (index: any):object => ({
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    });

    return (
      <div className={classes.main}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          {t('Assessment:title')}
        </Typography>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
            aria-label="Assessments lists"
          >
            <Tab label={<strong>{t('Assessment:tabs.available')}</strong>} {...a11yProps(0)} />
            <Tab label={<strong>{t('Assessment:tabs.canceled')}</strong>} {...a11yProps(1)} />
            <Tab label={<strong>{t('Assessment:tabs.expired')}</strong>} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div className={classes.tab}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <AssessmentsList />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    );
  },
);

Assessment.displayName = 'Assessment';

export default Assessment;
