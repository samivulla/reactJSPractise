import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import FunctionalClick from './components/functionalClick';
import ClassClick from './components/classClick';
import Eventbind from './components/eventbind';
import ParentComponent from './components/parentComponent';
import UserGreetings from './components/userGreetings';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="bruce"/>
        <Greet name="clerk" />
        <Greet name="diana" />
        <Welcome />
        <Message /> 
        <FunctionalClick />
        <ClassClick />
        <Eventbind />
        <ParentComponent />
        */}
        <UserGreetings />
      </div>
    );
  }
}

export default App;
