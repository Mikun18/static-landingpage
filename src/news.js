import React, {useState} from 'react'

const News = () => {
    const[value, setValue] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value.email !== '' && value.password !==''){
            alert('Great! You will begin to receive email from us')
        }else{
            alert('Fill the form')
        }
    }

  return (
    <section style={{marginTop:'16%', display:'flex', alignItems:'center', backgroundColor:'#f8f8fe', padding:'30px 60px', marginLeft:'190px', marginRight:'200px'}}>
        <article className='news-text'>
            <h3>OUR NEWSLETTER</h3>
            <h1>Stay Updated with our weekly newsletter</h1>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
        </article>

        <article className='news-form'>
            <h3>Signup For Newsletter</h3>

            <form onSubmit={handleSubmit}>
                <input type="email" name='email' value={value.email} onChange={(e) => setValue(e.target.value)} placeholder='Email Address' />
                <input type="password" value={value.password} onChange={(e) => setValue(e.target.value)} placeholder='Password' />
                <button>Get Started</button>
            </form>
        </article>
    </section>
  )
}

export default News