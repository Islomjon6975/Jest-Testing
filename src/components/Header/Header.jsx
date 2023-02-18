import React from 'react'
import "./Header.css"

export const Header = ({title = 'Header'}) => {
  return (
    <>
      <h1 title='Header' className='header' data-testid='header-1'>{title}</h1>
      {/* <h3 className='header'>Cat</h3> */}
    </>
  )
}

export default Header;