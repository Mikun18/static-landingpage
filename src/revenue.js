import React from 'react'
import './index.css'

const Revenue = () => {
  return (
    <section className='revenue'>
        <div className='rev-head'>
            <p></p>
            <h3>Revenue</h3>
        </div>

        <h2>$36,680<small style={{fontSize:'small', color:'aqua', padding:'0px 4px'}}>+12%</small></h2>
        <p style={{color:'gray', fontSize:'small', marginTop:'2%', marginLeft:'3%', width:'200px'}}>Compared to $29,000 Last Year</p>
    </section>
  )
}

export default Revenue