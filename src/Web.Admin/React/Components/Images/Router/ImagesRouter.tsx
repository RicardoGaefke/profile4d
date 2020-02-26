import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Page from '../ImageForm/Page';
import MyImageTrinoBrain from '../ImageTrinoBrain/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/logo`} component={Page} />
        <Route path={`${match.url}/imagetrinobrain`} component={MyImageTrinoBrain} />
      </MyTemplate>
    );
  },
);
