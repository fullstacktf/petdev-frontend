import React from 'react';
import 'semantic-ui-react'
import SidebarHomePage from './components/Sidebar';

import './App.css';
import ProfileMap from './components/ProfileMap';

const App: React.FC = () => {
  return (
    <div>
      <ProfileMap/>
    </div>
  );
}

export default App;
