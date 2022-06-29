import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  return (
    <div>
      <section className='header'>
        <div>
          <h3>AR SHAKIR</h3>
        </div>
        <div style={{display:'flex'}}>
          <button className='nav' id='nav'>Products</button>
          <button className='nav'>Template</button>
          <button className='nav'>Blog</button>
          <button className='nav'>Pricing</button>
        </div>
          <div style={{display:'flex'}}>
            <button className='sign-btn'>Sign in</button>
            <button className='start-btn'>Start Free</button>
          </div>
      </section>
  
      <SmallerHeader />
    </div>
  )
}

const SmallerHeader = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <section>
        <div className='smaller-header'>
            <FontAwesomeIcon icon={faBars} onClick={() => setShowModal(true)} style={{fontSize:'30px', cursor:'pointer'}}/>
            <h3>AR SHAKIR</h3>
            <div>
              <button className='sign-btn'>Sign in</button>
              <button className='start-btn'>Start Free</button>
            </div>
        </div>
        <div>
          <AnimatePresence>
           {showModal &&<NavbarModal setShowModal={setShowModal}/>}
          </AnimatePresence>
        </div>
    </section>
  )
}

const NavbarModal = ({setShowModal}) => {

  const modalVariant = {
    hidden: {
      y: "-100vw"
    },
    visible: {
      y: 0,
    },
    close: {
      y: "-100vw",
      transition: {duration: 1}
    }
  }

  return(
    <section className='modal-bg'>
      <motion.div className='modal' variants={modalVariant} initial='hidden' animate='visible' exit='close'>
        <FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} style={{float:'right', padding:'0 20px', fontSize:'50px', cursor:'pointer'}}/>
        <button className='smaller-nav'>Products</button>
        <button className='smaller-nav'>Template</button>
        <button className='smaller-nav'>Blog</button>
        <button className='smaller-nav'>Pricing</button>
      </motion.div>
    </section>
  )
}

export default Header