import React from 'react'
import './index.css'

const Users = () => {
  return (
    <section className='user-con'>
        <div className='user' style={{marginTop:'5%'}}>
            <img src="Ellipse.svg" alt="" />
            <div className='sub-user'>
                <h5>John Do</h5>
                <p>Mon, Feb 28</p>
            </div>
        </div>

        <div className='user'>
            <img src="Vector.svg" alt="" style={{padding:'7px 5px', border:'2px slateblue solid', backgroundColor:'slateblue', borderRadius:'50%'}}/>
            <div className='sub-user'>
                <h5>Mike Taylor</h5>
                <p>Tue, Feb 21</p>
            </div>
            <img src="Black Man.jpg" className='user-img' style={{marginLeft:'33%'}}/>
        </div>

        <div className='user'>
            <img src="Ellipse.svg" alt="" />
            <div className='sub-user'>
                <h5>Angela Taylor</h5>
                <p>Wed, Jan 16</p>
            </div>
            <img src="White Man.jpg" className='user-img'/>
        </div>
    </section>
  )
}

export default Users