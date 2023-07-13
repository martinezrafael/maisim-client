import React from 'react';
import '../src/index.css';
import Header from './components/global/Header';
import UserList from './components/User/UserList';

const App = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  )
}

export default App