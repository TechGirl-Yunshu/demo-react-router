import React from 'react'
// (2) import Link and Route from react router
import { Link, Route } from 'react-router-dom'
import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <div className='nav-name'>
            <li><Link to='/'>Noelle Laureano</Link></li>
          </div>
          <div className='nav-menu'>
            {/* (4) update links */}
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </div>
        </ul>
      </nav>

      {/* (3) Routes */}
      <Route exact path='/' component={Bio} />
      <Route path='/projects' component={Projects} />
      <Route path='/experience' component={Experience} />
      <Route path='/contact' component={Contact} />

    </div>
  )
}

export default App
