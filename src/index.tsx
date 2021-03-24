import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CreateRouter } from 'estafette-router';

import { history } from 'libs';
import { Home } from 'pages';

import 'normalize.css';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const routes = [
  { name: 'Home', path: '*', component: Home },
];

render(
  <QueryClientProvider client={queryClient}>
    <CreateRouter routes={routes} history={history} />
  </QueryClientProvider>,
  document.getElementById('root')
);
