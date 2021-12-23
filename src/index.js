import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import './style.css';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="https://rec.au.auth0.com"
    clientId="Jy1vl5W1bXzbdysmFJGky9baQ0Bvh65o"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
