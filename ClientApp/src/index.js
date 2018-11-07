import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './bootstrap/css/bootstrap-responsive.min.css';
import './themes/css/flexslider.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppAdmin from './AppAdmin';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
<div>
<link href="themes/css/main.css" rel="stylesheet"/>
<link href="themes/css/bootstrappage.css" rel="stylesheet"/>
</div>
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
<div>
<script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
<script src="themes/js/jquery.scrolltotop.js"></script>
</div>
ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App/>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

