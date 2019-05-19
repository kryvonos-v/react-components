import React from 'react';
import './App.css';
import { Header, HeaderAction, HeaderTitle } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderAction href="/" position="left">Click me</HeaderAction>
        <HeaderTitle>My title</HeaderTitle>
        <HeaderAction type="button" position="right">Log out</HeaderAction>
      </Header>
    </div>
  );
}

export default App;
