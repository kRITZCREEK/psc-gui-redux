import React from 'react';
import { RouteHandler } from 'react-router';

import {Provider} from 'react-redux';
import configureStore from '../store/configureStore.js';

const store = configureStore({cwd: ''});

export default class AppContainer extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>{() => <RouteHandler />}</Provider>
      </div>
    );
  }

}


