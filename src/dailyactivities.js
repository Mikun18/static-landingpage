import React from 'react'

const Dailyactivities = () => {
  return (
    <article className='daily-activity'>
        <h2 style={{padding:'15px 15px', fontSize:'x-large', fontFamily:'MS Sans Serif, Geneva, sans-serif'}}>Daily activities</h2>

        <section style={{display:'flex', alignItems:'baseline', padding:'10px 4px'}}>
            <div>
                <p style={{padding:'20px 0px', height:'30px', borderRadius:'9999px', backgroundColor:'slateblue', marginRight:'16px', marginLeft:'16px'}}></p>
                <h4 style={{padding:'10px 5px', marginRight:''}}>Mon</h4>
            </div>
            <div>
                <p style={{padding:'20px 0px', paddingTop:'10px', height:'30px', borderRadius:'9999px', backgroundColor:'coral', marginRight:'12px', marginLeft:'13px'}}></p>
                <h4 style={{padding:'10px 5px'}}>Tue</h4>
            </div>
            <div>
                <p style={{padding:'20px 0px', paddingTop:'15px', height:'30px', borderRadius:'9999px', backgroundColor:'slateblue', marginRight:'16px', marginLeft:'16px'}}></p>
                <h4 style={{padding:'10px 5px'}}>Wed</h4>
            </div>
            <div>
                <p style={{padding:'20px 0px', paddingTop:'18px', height:'30px', borderRadius:'9999px', backgroundColor:'coral', marginRight:'19px', marginLeft:'13px'}}></p>
                <h4 style={{padding:'10px 5px'}}>Thur</h4>
            </div>
            <div>
                <p style={{padding:'20px 0px', paddingTop:'12px', height:'30px', borderRadius:'9999px', backgroundColor:'slateblue', marginRight:'12px', marginLeft:'10px'}}></p>
                <h4 style={{padding:'10px 7px'}}>Fri</h4>
            </div>
            <div>
                <p style={{padding:'20px 0px', paddingTop:'7px', height:'30px', borderRadius:'9999px', backgroundColor:'coral', marginRight:'11px', marginLeft:'13px'}}></p>
                <h4 style={{padding:'10px 5px'}}>Sat</h4>
            </div>
        </section>
    </article>
  )
}

export default Dailyactivities