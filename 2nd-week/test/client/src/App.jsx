import React from 'react'
import './App.css'

function App() {
  return React.createElement(
    'form',
    {},
  React.createElement('style', {}, `
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
  `),
    React.createElement('h1', {}, 'Registration Form'),
    React.createElement('h4', {}, 'Login'),
    React.createElement('input', {
      type: 'text',
      placeholder: 'Username',
    }),
    React.createElement('br'),
    React.createElement('br'),
    React.createElement('input', {
      type: 'password',
      placeholder: 'Password',
    }),
        React.createElement('br'),

    React.createElement('label', {}, 
      React.createElement('input', {
        type: 'radio',
        name: 'gender',
        value: 'male',
      }),
      ' Male'
    ),
    React.createElement('br'),

    React.createElement('label', {}, 
      React.createElement('input', {
        type: 'radio',
        name: 'gender',
        value: 'female',
      }),
      ' Female'
    ),
    React.createElement('br'),
    React.createElement('button', {}, 'Submit')
  )
}

export default App

