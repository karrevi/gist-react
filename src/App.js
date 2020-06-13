import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login.jsx';
import Home from './containers/Home/Home';
import Profile from './containers/User/Profile/Profile.jsx';
import NewSnnipets from './containers/NewSnnipets/NewSnnipets';
import { getUserInfo } from './redux/actions/users';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      getUserInfo()
      .catch(console.error)
    }
  }, [])
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/register' component={Register} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/home' component={Home} exact/>
      <Route path='/profile' component={Profile} exact />
      <Route path='/newsnnipets' component={NewSnnipets}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
