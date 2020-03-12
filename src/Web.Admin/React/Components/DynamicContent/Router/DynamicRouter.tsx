import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Questions from '../Questions/Questions';
import QuestionAdd from '../Questions/Add/Add';
import PageEdit from '../Questions/Edit/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/questions`} exact component={Questions} />
        <Route path={`${match.url}/questions/add`} component={QuestionAdd} />
        <Route path={`${match.url}/questions/edit/:id`} component={PageEdit} />
      </MyTemplate>
    );
  },
);