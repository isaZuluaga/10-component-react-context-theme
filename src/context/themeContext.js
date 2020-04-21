import React, { Component } from 'react'

const ThemeContext = React.createContext()

const themes = {
  dark: {
    color: 'white',
    backgroundColor: 'black'
  },
  light: {
    color: 'black',
    backgroundColor: 'white'
  }
}

class ThemeProvider extends Component {
  state = {
    theme: themes.dark
  }

  // theme = 'dark' or 'light'
  handleChangeTheme = (theme) => (e) => {
    e.preventDefault()
    this.setState({
      theme: themes[theme]
    })
  }

  render() {
    const { children } = this.props

    // share this.state with its consumers (children)
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        changeTheme: this.handleChangeTheme
      }}>
        { children }
      </ThemeContext.Provider>
    )
  }
}

const ThemeConsumer = ThemeContext.Consumer

export { ThemeContext, ThemeProvider, ThemeConsumer }
