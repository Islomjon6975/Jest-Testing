import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export const Footer = ({
  numberOfIncompleteTasks
}) => {
  return (
    <div className='footer'>
      <p role='paragraph'>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left</p>
      <Link to='/followers'>Followers</Link>
    </div>
  )
}

export default Footer