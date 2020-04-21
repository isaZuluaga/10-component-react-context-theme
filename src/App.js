import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from './context/themeContext'
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider>
          <Buttons />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
