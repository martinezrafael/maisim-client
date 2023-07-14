import React from 'react';
import '../src/index.css';
import Header from '../src/components/Global/Header';
import UserList from './components/User/UserList';

const App = () => {
  return (
    <>
      <Header />
      <UserList />
    </>
  )
}

export default App