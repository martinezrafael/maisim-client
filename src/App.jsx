import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/index.css';
import Header from './components/Global/Header';

import User from './components/User/User';
import Users from './components/User/UserList';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/admin/api/v2/users/:userId' Component={User} />
      <Route path='/admin/api/v2/users/' Component={Users} />
    </Routes>
    </>
  )
}

export default App