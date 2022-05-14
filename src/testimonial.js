import React from 'react'
import { useEffect, useState } from 'react'
import { person } from './person'
import './index.css'

const Testimonial = () => {
    const [testimony, setTestimony] = useState(0);

    const next = () => {
        setTestimony((prev) => {
            return prev +1
        });

        if(testimony == person.length -1){
            return setTestimony(0)
        }
    }

  return (
    <section>
        <div className='review-header'>
            <h4>TESTIMONIAL</h4>
            <h1>What Our Happy <br/>Users Says</h1>
        </div>
        <div className='review-con'>
            {/* <h3></h3> */}
            <img src={person[testimony].image} alt="" />
            <h4>{person[testimony].name}</h4>
            <h5>{person[testimony].job}</h5>
            <p>{person[testimony].review}</p>
            <button onClick={next} className='review-btn'>Surprise Me</button> 
        </div>

        <article className='sub-footer'>
            <h1>Get Started AR Shakir</h1>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional<br/> assistance sufficient not.</p>
            <button className='get-started'>Get Started</button>
        </article>
    </section>
  )
}

export default Testimonial