import React from 'react'
import Users from './users'
import './index.css'

const Feature = () => {
  return (
    <section className='feature'>
        <article className='feature-img'>
            <img src="./girl.png" style={{marginLeft:'5%', marginTop:'5%', position:'absolute', zIndex:'-1'}}/>
        <div>
            <section style={{backgroundColor:'inherit', marginLeft:'45%', marginTop:'50%'}}>
                <div style={{display:'flex', alignItems:'center', backgroundColor:'white', padding:'10px', borderRadius:'0.5rem', marginRight:'20%', marginBottom:'1%'}}>
                <img src="Ellipse.svg" alt="" />
                    <div style={{padding:'0px 12px'}}>
                        <h5 style={{fontSize:'large'}}>John Do</h5>
                        <p style={{fontSize:'small', color:'gray'}}>Mon, Feb 28</p>
                    </div>
                </div>

                <div style={{display:'flex', alignItems:'center', backgroundColor:'white', padding:'10px', borderRadius:'0.5rem', marginRight:'20%', marginBottom:'1%'}}>
                    <img src="Vector.svg" alt="" style={{padding:'7px 5px', border:'2px slateblue solid', backgroundColor:'slateblue', borderRadius:'50%'}}/>
                    <div style={{padding:'0px 12px'}}>
                        <h5 style={{fontSize:'large'}}>Mike Taylor</h5>
                        <p style={{fontSize:'small', color:'gray'}}>Mon, Feb 21</p>
                    </div>
                    <img src="Black Man.jpg" style={{width:'30px', height:'30px', objectFit:'cover', borderRadius:'50%', marginLeft:'25%'}}/>
                </div>

                <div style={{display:'flex', alignItems:'center', backgroundColor:'white', padding:'10px', borderRadius:'0.5rem', marginRight:'20%'}}> 
                    <img src="Ellipse.svg" alt="" />
                    <div style={{padding:'0px 12px'}}>
                        <h5 style={{fontSize:'large'}}>Angela Taylor</h5>
                        <p style={{fontSize:'small', color:'gray'}}>Wed, Jan 16</p>
                    </div>
                    <img src="White Man.jpg" style={{width:'30px', height:'30px', objectFit:'cover', borderRadius:'50%', marginLeft:'23%'}}/>
                </div>
            </section>
        </div>
        </article>

        <article className='feature-con'>
            <h3>OUR FEATURE</h3>
            <h1>Receive payments quickly from anywhere</h1>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <button className='get-started'>Get Started</button>
        </article>
    </section>
  )
}

export default Feature