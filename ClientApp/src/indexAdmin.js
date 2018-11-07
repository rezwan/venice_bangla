import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppAdmin from './AppAdmin';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/js/bootstrap.min.js';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <AppAdmin />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
