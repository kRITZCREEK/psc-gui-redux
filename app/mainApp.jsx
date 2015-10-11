import React from 'react';
// import AppContainer from './containers/AppContainer';
import router from './routes/router';
import debug from './utils/debug';
import './app.css';

import {main} from '../src/Main.purs';

var dd = debug('mainApp');

window.location.hash = '/';

router.run(Handler => {
  dd('router.run', Handler);
  React.render(<Handler />, document.getElementById('react-root'));
});
