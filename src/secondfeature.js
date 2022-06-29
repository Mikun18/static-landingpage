import React from 'react'
import Dailyactivities from './dailyactivities'
import Invoice from './invoice'

const SecondFeature = () => {
  return (
    <section  className='secondfeature'>
        <article className='secondfeature-news-text'>
            <h3>OUR FEATURE</h3>
            <h1>Stay Updated with our weekly newsletter</h1>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <button className='get-started'>Get Started</button>
        </article>

        <article className='secondfeature-diagram'>
            <Dailyactivities />
            <Invoice />
        </article>
    </section>
  )
}

export default SecondFeature