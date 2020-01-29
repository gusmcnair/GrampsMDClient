import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './headersection.js'
import MainSection from './mainsection.js'
import './styling.css';
import GrampsResults from './grampsresults.js'

export default class App extends React.Component{
  render(){
  return (
    <div className="App">
      <main>
        <HeaderSection/>
        <MainSection/>
      </main>
    </div>
  );
  }
}

