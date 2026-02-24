// import React from 'react'
// import './App.css'

// function App() {
//   return React.createElement(
//     'form',
//     {},
//   React.createElement('style', {}, `
//     form {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       color: #333;
//       font-family: Arial, sans-serif;
//       background-color: #f9f9f9;
//     }
//   `),
//     React.createElement('h1', {}, 'Registration Form'),
//     React.createElement('h4', {}, 'Login'),
//     React.createElement('input', {
//       type: 'text',
//       placeholder: 'Username',
//     }),
//     React.createElement('br'),
//     React.createElement('br'),
//     React.createElement('input', {
//       type: 'password',
//       placeholder: 'Password',
//     }),
//         React.createElement('br'),

//     React.createElement('label', {}, 
//       React.createElement('input', {
//         type: 'radio',
//         name: 'gender',
//         value: 'male',
//       }),
//       ' Male'
//     ),
//     React.createElement('br'),

//     React.createElement('label', {}, 
//       React.createElement('input', {
//         type: 'radio',
//         name: 'gender',
//         value: 'female',
//       }),
//       ' Female'
//     ),
//     React.createElement('br'),
//     React.createElement('button', {}, 'Submit')
//   )
// }

// export default App



import React, { useState } from 'react'
function App() {
  const [color,setcolor] = useState('red');
  return (<> <h1>My Favorite color is {color}</h1>
          {/* <button type='button' onClick={()=>setcolor('blue')}>Blue</button>
          <button type='button' onClick={()=>settlor('green')}>Green</button>
          <button type='button' onClick={()=>setcolor('yellow')}>Yellow</button>
          <button type='button' onClick={()=>setcolor('red')}>Red</button>
          <button type='button' onClick={()=>setcolor('pink')}>Pink</button> */}
           </>)
}
export default App;