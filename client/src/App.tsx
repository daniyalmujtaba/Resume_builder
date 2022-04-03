import React from 'react';
import {Provider} from 'react-redux';
import store from './data/store';
import './assets/styles/App.css';
import Nav from './Nav';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>      
      <PersistGate loading={null} persistor={persistor}>
        <Nav/>
      </PersistGate>
    </Provider>
      
  );
}

export default App;
