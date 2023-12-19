import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Experiences from './components/Experiences'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Experiences />
      
    </div>
  )
}

export default App
