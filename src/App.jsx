import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';

//import HeaderFanimals from './components/shared/HeaderFanimals';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import NearUsers from './pages/NearUsers';

import birdsbackground from './assets/birdsbackground.png';

const styles = {
  // linear-gradient(120deg, rgba(255, 178, 243, 0.6), transparent)
  backgroundImage: `linear-gradient(rgba(255, 178, 243, 0.6), rgba(255, 178, 243, 0.6)), url(${birdsbackground})`,
  backgroundRepeat: 'repeat',
  backgroundBlendMode: 'difference'
}

const App = () => {
  return (

    <Router>


      <div className="App" style={styles}>
        {/* <HeaderFanimals />
 */}        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/nearusers" component={NearUsers} />



      </div>
    </Router>


  )
};
export default App
