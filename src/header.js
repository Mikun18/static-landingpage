import React from 'react'

const Header = () => {
  return (
    <section className='header'>
        <h3>AR SHAKIR</h3>
        <button className='nav' id='nav'>Products</button>
        <button className='nav'>Template</button>
        <button className='nav'>Blog</button>
        <button className='nav'>Pricing</button>
        <button className='sign-btn'>Sign in</button>
        <button className='start-btn'>Start Free</button>
    </section>
  )
}

export default Header