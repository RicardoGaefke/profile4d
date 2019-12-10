import React from 'react';
import { Divider } from '@material-ui/core';
import Home from '../../Components/Home/Banner/Banner';
import Intro from '../../Components/Home/Intro/Intro';
import Announcements from '../../Components/Home/Announcements/Announcements';

export default (): React.ReactElement<any> => (
  <>
    <Home />
    <Intro />
    <Divider />
    <Announcements />
    <Divider />
  </>
);
