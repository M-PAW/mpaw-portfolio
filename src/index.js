import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from './components/Navigation';
import Social from './components/Social';

ReactDOM.render(
<Router>
  <div className='wrapper'>
    <Navigation />
    <div className='content-wrapper'>
      <App />
    </div>
    <Social />
  </div>
</Router>
, document.getElementById('root'));


