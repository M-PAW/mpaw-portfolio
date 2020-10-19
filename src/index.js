import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from './components/Navigation';
import Social from './components/Social';

// Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

ReactDOM.render(
<Router>
  {/* <div className='wrapper'>
    <Social />
    <Navigation />
    <div className='content-wrapper'>
      <App />
    </div>
  </div> */}

  <div className="wrapper">
    <CssBaseline />
    <Container maxWidth="lg" minWidth="sm" style={{marginTop: "25px", padding: "3%",position: "relative", top: "10px"}} >
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <App />

    </Container>
    <div className="bottom">
          <Navigation />
          <Social />
    </div>
  </div>

</Router>
, document.getElementById('root'));


