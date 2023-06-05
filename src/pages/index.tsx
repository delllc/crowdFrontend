import {createRoutesView} from 'atomic-router-react';

import {AuthRoute} from './auth';
import {HomeRoute} from './home';

export const Pages = createRoutesView({
  routes: [AuthRoute, HomeRoute],
});
