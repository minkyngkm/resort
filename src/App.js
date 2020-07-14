import React from 'react';
import './App.css';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Home from  './Pages/Home';
import Error from './Pages/Error';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/rooms" component={Rooms}></Route>
      <Route path="/rooms/:id" component={SingleRoom}></Route>
      <Route component={Error}></Route>
    </Switch>
    </>
  );
}

export default App;
