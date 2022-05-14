import React from 'react'
import Dailyactivities from './dailyactivities'
import Invoice from './invoice'

const SecondFeature = () => {
  return (
    <section style={{marginTop:'6%', display:'flex', alignItems:'center', padding:'30px 250px', margin:'0px 0px'}}>
        <article className='news-text'>
            <h3>OUR FEATURE</h3>
             <h1 style={{width:'120%'}}>Stay Updated with our weekly newsletter</h1>
            <p style={{width:'120%'}}>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <button className='get-started'>Get Started</button>
        </article>

        <article style={{padding:'0px 200px'}}>
            <Dailyactivities />
            <Invoice />
        </article>
    </section>
  )
}

export default SecondFeature