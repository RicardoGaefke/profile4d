import React, { useState, useEffect } from 'react';
import {
  Route, useHistory, useRouteMatch,
} from 'react-router-dom';
import MyAxios from '../../Utils/MyAxios';
import Loading from '../Connected/Loading/Loading';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';
import { useStateValue } from '../../Initial/Context/StateProvider';

interface IProps {
  exact?: boolean,
  path: string,
  component: React.ComponentType<any>,
}

export default ({ component: Component, path: Path, ...rest }: IProps): React.ReactElement<IProps> => {
  const [dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const match = useRouteMatch({
    path: Path,
    strict: true,
    sensitive: true,
  });

  useEffect((): void => {
    if (match?.url === window.location.pathname) {
      const useEffAsync = async (): Promise<void> => {
        await MyAxios(window.location.href).get<boolean>('Identity/IsAuthenticated',
          {}).then((response): void => {
          const { data } = response;

          if (!data) {
            history.push('/');
            dispatch({
              type: 'changeAuth',
              value: false,
            });
            return;
          }

          setLoading(false);
        });
      };

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
