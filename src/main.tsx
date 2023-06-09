import {createRoot} from 'react-dom/client';
import {App} from '~/app';

import {appStarted} from '~/shared/config/init';

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

appStarted();
root.render(<App />);
