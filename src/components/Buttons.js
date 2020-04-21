import React, { Component } from 'react'
import { ThemeContext } from '../context/themeContext'

export default class Buttons extends Component {
  render() {
    const { theme, changeTheme } = this.context
    return (
      <>
        <button
          style={{
            color: theme.color,
            backgroundColor: theme.backgroundColor
          }}
        >
          Click me!
        </button>
        <button onClick={changeTheme('dark')}>Dark</button>
        <button onClick={changeTheme('light')}>Light</button>
      </>
    )
  }
}

Buttons.contextType = ThemeContext
