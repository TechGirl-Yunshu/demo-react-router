import React from 'react'
// import Link and Route from react router
import { Link, Route } from 'react-router-dom'
import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'

import jobHistory from './Data/jobHistory'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <div className='nav-name'>
            <li><Link to='/'>Noelle Laureano</Link></li>
          </div>
          <div className='nav-menu'>
            {/* update links */}
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </div>
        </ul>
      </nav>

      {/* Routes */}
      {/* (1) inspect implicit route props */}
      <Route exact path='/' component={Bio} />
      <Route path='/projects' component={Projects} />
      <Route
        path='/experience'
        render={(routeProps) => (
          <Experience
            // history={routeProps.history}
            // location={routeProps.location}
            // match={routeProps.match}
            {...routeProps}
            jobHistory={jobHistory}
          />
        )}
      />
      <Route path='/contact' component={Contact} />

    </div>
  )
}

export default App
