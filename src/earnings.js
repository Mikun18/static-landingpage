import React from 'react'
import './index.css'

const Earnings = () => {
  return (
    <section style={{backgroundColor:'#f8f8fe', padding:'4%', marginRight:'30%'}}>
       <article className='container'>
           <div className='item'>
               <img src="./icon1.svg"/>
               <div>
                   <p>Total net worth</p>
                   <h6>$5,250.90</h6>
               </div>
           </div>

           <div className='item'>
               <img src="./icon2.svg"/>
               <div>
                   <p>Total earnings</p>
                   <h6>$10,596.80</h6>
               </div>
           </div>

           <div className='item' style={{marginTop:'30%'}}>
               <img src="./icon3.svg"/>
               <div>
                   <p>harvested losses</p>
                   <h6>$0.00</h6>
               </div>
           </div>

           <div className='item' style={{marginTop:'30%'}}>
               <img src="./icon4.svg"/>
               <div>
                   <p>Total for all goods</p>
                   <h6>$5,596.90</h6>
               </div>
           </div>
       </article>
    </section>
  )
}

export default Earnings