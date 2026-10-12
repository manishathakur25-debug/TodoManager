// import React from 'react'
// import TodoManager from './components/TodoManager'
// import './App.css'
// function App() {
//   return (
//     <div>
//       <TodoManager />
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Debouncing from './components/'

// function App() {
//   return (
    
//     <>
  
//     </>
//   )
// }

// export default App

import React from 'react'
import { useContext } from 'react'
import ThemeButton from './components/ThemeButton'
import ThemeContext from './components/ThemeContext'
const App = () =>{
  const {dark} = useContext(ThemeContext);
  return (
    <div>
      style{{
        backgroundColor: dark? "black" : "white",
        color: dark? "white" : "black",
        minHeight: "100vh",
        padding: "40px"
      }}
      <h1>Theme Switcher</h1>
      <p>current theme: {dark ? "dark": "light"}</p>
      <ThemeButton/>
    </div>
  )
}

export default App