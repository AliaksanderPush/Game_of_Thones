import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'

const application = (
 <BrowserRouter>
 <App />
 </BrowserRouter>
);

ReactDOM.render(
 
    application,

  document.getElementById('root')
);