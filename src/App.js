import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Home from './views/Home';
import Clients from './views/Clients';

function App() {
  return (
    <>
      <Header />

      <Switch>


        <Route path="/clients" component={Clients} />
        <Route path="/" component={Home} />

      </Switch>


    </>
  );
}

export default App;
