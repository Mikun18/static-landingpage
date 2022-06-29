import React from 'react'

const Wallet = () => {
  return (
    <section className='wallet'>
        <h2>My Wallets</h2>

        <article className='crypt'>
          <div className='btc'>
            <p>BTC</p>
            <h6>69<small>%</small></h6>
          </div>

          <div className='btc'>
            <p>LTC</p>
            <h6>82<small>%</small></h6>
          </div>

          <div className='btc' style={{color:'white', backgroundColor:'slateblue', boxShadow:'1px 1px 5px slateblue'}}>
            <p>XRP</p>
            <h6>99<small>%</small></h6>
          </div>

          <div className='btc'>
            <p>BLT</p>
            <h6>62<small>%</small></h6>
          </div>

          <div className='btc' style={{backgroundColor:'#f8f8fe', border:'dashed black 1px'}}>
            <p>Add New +</p>
            <h6><small>Wal</small></h6>
          </div>
        </article>
    </section>
  )
}

export default Wallet