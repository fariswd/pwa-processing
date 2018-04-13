import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './config/store'
import RootNavigation from './navigation/RootNavigation'
import 'bulma/css/bulma.css';
import './static/css/App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <RootNavigation />
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
