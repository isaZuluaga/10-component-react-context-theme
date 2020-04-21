import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Parent extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        { children }
      </>
    )
  }
}

const ChildOne = () => <main>{'I am first child'}</main>

function ChildTwo () {
  return (
    <section>{'Ok, I am second child'}</section>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <ChildOne />
          <ChildTwo />
        </Parent>
      </div>
    );
  }
}

export default App;
