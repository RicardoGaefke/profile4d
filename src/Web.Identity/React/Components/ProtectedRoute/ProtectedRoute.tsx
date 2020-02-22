import React, { useState, useEffect } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Route, useHistory, RouteProps,
} from 'react-router-dom';
import MyAxios from '../../Utils/MyAxios';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';

interface IProps {
  exact?: boolean,
  path: string,
  component: React.ComponentType<any>,
}

const Loading = (): React.ReactElement => (
  <div>
    Loading
  </div>
);

export default ({ component: Component, ...rest }: IProps): React.ReactElement<IProps> => {
  const [loading, setLoading] = useState(true);
  const hist = useHistory();

  useEffect((): void => {
    const useEffAsync = async (): Promise<void> => {
      await MyAxios(window.location.href).get<boolean>('Identity/IsAuthenticated',
        {}).then((response): void => {
        const { data } = response;

        if (!data) {
          hist.push('/');
          return;
        }

        setLoading(false);
      });
    };

    useEffAsync();
  }, []);

  return (
    <Route
      {...rest}
      render={(props): React.ReactElement => (
        (loading) ? <Loading /> : (<Component {...props} />)
      )}
    />
  );
};
