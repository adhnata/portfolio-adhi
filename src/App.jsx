import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
