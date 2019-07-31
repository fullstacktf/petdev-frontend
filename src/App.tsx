import React from 'react';
import GridLogin from './components/GridLogin';
import HeaderUserProfile from './components/HeaderUserProfile';
import UserCard from './components/CardUser';
import GridUserProfile from './components/GridUserProfile'
import NewUserGrid from './components/NewUserGrid';
import UserContainer from './components/UserContainer';
import SidebarHomePage from './components/Sidebar';
import HeaderHomePage from './components/HeaderLandingPage';
import InputSearchHomePage from './components/SearchHomePage';
import ContainerHomePage from './components/ContainerHomePage';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <SidebarHomePage/>
    </div>
  );
}

export default App;
