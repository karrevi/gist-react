import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  );
}

export default App;
