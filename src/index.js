import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './store'
import Layout from './components/containers/Layout';

const app = (
  <Provider store={store.createStore()}>
    <Layout/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))