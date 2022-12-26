import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/bootstrap-override.scss'
import'./bootstrap-override.scss';
import './i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
     <App/>
     </Router>
     </Provider>
  </React.StrictMode>
);

reportWebVitals();
