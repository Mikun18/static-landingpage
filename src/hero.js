import React from 'react'
import './index.css'
import Revenue from './revenue'

const Hero = () => {
  return (
    <div className='hero-page'>
        <section className='hero-text'>
            <h1>Managing bussiness has never been easier</h1>

            <div className='sub-text '>
              <p style={{width:'500px', fontSize:'large', fontWeight:'lighter'}}>End-to-end payments and financial management in a single solution. Meet the right platform to help realize</p>
              <Revenue />
            </div>

            <div className='balance'>
              <button className='get-started'>Get Started</button>
              <button className='how'>See how it works</button>

              <article className='check'>
                <div className='sub-check'>
                  <img src="./check.svg"/>
                  <p>Free Register</p>
                </div>
                <div className='sub-check'>
                  <img src="./check.svg"/>
                  <p>Great Service</p>
                </div>
              </article>
            </div>
        </section>

        <section className='hero-img'>
            <img src="./gnd.png" className='gnd'/>
        </section>
    </div>
  )
}

export default Hero