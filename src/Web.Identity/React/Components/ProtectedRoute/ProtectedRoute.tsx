import React, { useState, useEffect } from 'react';
import {
  Route, useHistory, useRouteMatch,
} from 'react-router-dom';
import MyAxios from '../../Utils/MyAxios';
import Loading from '../Connected/Loading/Loading';
import { useStateValue } from '../../Initial/Context/StateProvider';

interface IProps {
  exact?: boolean,
  path: string,
  component: React.ComponentType<any>,
}

export default ({ component: Component, path: Path, ...rest }: IProps): React.ReactElement<IProps> => {
  const [{ IsAuthenticated }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const match = useRouteMatch({
    path: Path,
    strict: true,
    sensitive: true,
  });

  const useEffAsync = async (): Promise<void> => {
    await MyAxios(window.location.href).get<boolean>('Identity/IsAuthenticated',
      {}).then((response): void => {
      const { data } = response;

      if (!data) {
        history.push('/');
        if (IsAuthenticated) {
          dispatch({
            type: 'changeAuth',
            value: false,
          });
        }
        return;
      }

      setLoading(false);
    });
  };

  useEffect((): void => {
    if (match?.url === window.location.pathname) {
      useEffAsync();
    }
  }, [match]);

  return (
    <Route
      path={Path}
      {...rest}
      render={(props): React.ReactElement => (
        (loading) ? (<Loading />) : (<Component {...props} />)
      )}
    />
  );
};
