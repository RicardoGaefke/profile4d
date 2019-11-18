import React from 'react';
import ReactDOM from 'react-dom';

const App = (): React.ReactElement<any> => (
  <>
    My SSR React app
  </>
);

ReactDOM.hydrate(<App />, document.getElementById('root'));
