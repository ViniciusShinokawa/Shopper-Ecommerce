import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Ofeers on Your Email</h1>
        <p>Subscribe to our newsletter and stay</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
