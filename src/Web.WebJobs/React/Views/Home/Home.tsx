import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic<React.ReactNode>(
  (): any => import('../../Components/Home/Home').then((mod): any => mod.default),
  { ssr: false },
);

export default (): React.ReactElement => (
  <>
    <Home />
  </>
);
