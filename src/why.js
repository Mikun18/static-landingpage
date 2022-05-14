import React from 'react'
import Earnings from './earnings'
import './index.css'
import Wallet from './wallet'
import Users from './users'

const Why = () => {
  return (
   <section>
     <div className='logos'>
       <h2>Companies we helped grow</h2>
       <img src="./logos.svg"/>
     </div>

     <div className='why'>
       <h2>WHY AR SHAKIR</h2>
       <h1>Specially Designed For Crypto Payment</h1>
     </div>

     <article style={{display:'grid', padding:'2% 4%', gridTemplateColumns:'repeat(3, 1fr)', gap:'1rem', marginLeft:'4%'}}>
       <Earnings />
       <Wallet />
       <Users />
     </article>

     <article className='block-con'>
       <div className='block'>
         <h2>Quick Summaries</h2>
         <p>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh.</p>
       </div>

       <div className='block' style={{marginLeft:'6%'}}>
         <h2>Manage Wallets</h2>
         <p>Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. Latter person am secure.</p>
       </div>

       <div className='block' style={{marginLeft:'6%'}}>
         <h2>Request Payments</h2>
         <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. </p>
       </div>
     </article>
   </section>
  )
}

export default Why