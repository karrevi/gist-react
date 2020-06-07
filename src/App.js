import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Register from './containers/User/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/register' component={Register} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
