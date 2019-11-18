import '@babel/polyfill';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { ServerStyleSheets } from '@material-ui/styles';

export default createServerRenderer((params): Promise<any> => new Promise((resolve): void => {
  const PageInfo = JSON.parse(params.data.page);
  PageInfo.consentCookie = params.data.consentCookie;

  const sheets = new ServerStyleSheets();

  const App = (
    <StaticRouter location={params.url} context={params}>
      <>
        My SSR React app
      </>
    </StaticRouter>
  );

  const html = renderToString(
    sheets.collect(App),
  );

  const css = sheets.toString();

  const renderFullPage = (): string => `${html}<style>${css}</style>`;

  resolve({
    html: renderFullPage(),
    globals: {
      MyInitialState: PageInfo,
    },
  });
}));
