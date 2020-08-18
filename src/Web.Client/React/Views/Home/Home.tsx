import React from 'react';
import { Divider } from '@material-ui/core';
import Home from '../../Components/Home/Banner/Banner';
import Intro from '../../Components/Home/Intro/Intro';
import Announcements from '../../Components/Home/Announcements/Announcements';
import Testimonials from '../../Components/Home/Testimonials/Testimonials';

export default (): React.ReactElement => (
  <>
    <Home />
    <Intro />
    <Divider />
    <Announcements />
    <Divider />
    <Testimonials />
  </>
);
