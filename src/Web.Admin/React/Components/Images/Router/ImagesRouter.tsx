import React from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Page from '../ImageForm/Page';
import MyImageTrinoBrain from '../ImageTrinoBrain/Page';
import MyImageFourIntelligenceCenters from '../ImageFourIntelligenceCenters/Page';
import MyImageThreeDimensions from '../ImageThreeDimensions/Page';
import MyImageFourStages from '../ImageFourStages/Page';
import MyImageNotFound from '../ImageNotFound/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/logo`} component={Page} />
        <Route path={`${match.url}/imagetrinobrain`} component={MyImageTrinoBrain} />
        <Route path={`${match.url}/imagefourintelligencecenters/`} component={MyImageFourIntelligenceCenters} />
        <Route path={`${match.url}/imagethreedimensions`} component={MyImageThreeDimensions} />
        <Route path={`${match.url}/imagefourstages`} component={MyImageFourStages} />
        <Route path={`${match.url}/imagenotfound`} component={MyImageNotFound} />
      </MyTemplate>
    );
  },
);
