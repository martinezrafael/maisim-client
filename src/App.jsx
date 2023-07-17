import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/index.css';
import Header from './components/Global/Header';

import User from './components/User/User';
import Users from './components/User/UserList';
import Top10List from './components/Comparativo2/Top10List';

const App = () => {
  return (
    <div className='sm:max-w-2xl m-auto flex flex-col'>
      <Header />
      <Routes>
        <Route path='/admin/api/v2/users/:userId' Component={User} />
        <Route path='/admin/api/v2/users/' Component={Users} />
      </Routes>
    </div>
  )
}

export default App