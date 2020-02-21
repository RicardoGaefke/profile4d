import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, useHistory, RouteProps } from 'react-router-dom';

export default (props: RouteProps): React.ReactElement<RouteProps> => {
  const [logged, setLogged] = useState(false);
  const { path, component } = props;
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  useEffect((): void => {
    setLogged(true);
  }, []);

  return (
    <>
      {
        (logged === null)
          ? <div>loading</div>
          : <Route path={path} component={component} />
      }
    </>
  );
};
