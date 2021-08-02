import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDynamicContent } from '../../../../../../TypeScript/Interfaces/IDynamicContent';
import Loading from '../../../Loading/Loading';
import Edit from './Edit';
import MyAxios from '../../../../Utils/MyAxios';
import { RouteWithIdProps } from '../../../../../../TypeScript/Interfaces/IRouteWithProps';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = props;
    const { id } = useParams<RouteWithIdProps>();

    const [state, setState] = useState({} as IDynamicContent);

    const fetchQuestions = (): void => {
      MyAxios(window.location.href)
        // alterar o webservice apenas, não a função Question ▼
        .get<IDynamicContent>(`/BehavioralAddiction/Question/${id}`)
        .then((response): void => setState(response.data));
    };

    useEffect((): void => {
      fetchQuestions();
    }, []);

    return (
      <>
        {
          (state.Success) ? (
            <>
              <Edit myValues={state} />
            </>
          ) : (
            <Loading />
          )
        }
      </>
    );
  },
);
