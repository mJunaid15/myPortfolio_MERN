import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import store from './store';
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const options ={
  positions:positions.TOP_RIGHT,
  timeout:5000,
  transitions:transitions.SCALE,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <AlertProvider template={AlertTemplate} {...options}>
  <App />

  </AlertProvider>
  </Provider>
    
  </>
);
