import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/register' component={Register} exact/>
      <Route path='/login' component={Login} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
