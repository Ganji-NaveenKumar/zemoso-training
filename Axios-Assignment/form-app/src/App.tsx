import React from 'react';
import './App.css';
import Page from './pages/index';
import LogOutButton from './components/organisms/Login/LogOutButton';
import LoginButton from './components/organisms/Login/LoginButton';
import Profile from './components/organisms/Login/profile';
function App() {
  return (
    <>
    <Page/> 
    <h3>Auth0 Login</h3>
    <LoginButton/>
    <LogOutButton/>
    <Profile/>
    </>
         
  );
}

export default App;
