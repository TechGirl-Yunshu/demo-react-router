import React from 'react'
import { SingleJob } from './'

const Experience = (props) => {
  console.log('^^^^ EXPERIENCE PROPS ^^^^')
  console.log(props)
  console.log('^^^^ EXPERIENCE PROPS ^^^^')

  return (
    <div>
      <h3>Experience</h3>
      <SingleJob jobs={props.jobHistory} />
    </div>
  )
}

export default Experience
