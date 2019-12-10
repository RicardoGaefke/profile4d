import React from 'react';
import { Divider } from '@material-ui/core';
import Home from '../../Components/Home/Banner/Banner';
import Intro from '../../Components/Home/Intro/Intro';

export default (): React.ReactElement<any> => (
  <>
    <Home />
    <Intro />
    <Divider />
  </>
);
