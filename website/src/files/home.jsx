import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='main hero'>

        {/* main */}
        <div className="events">
        <h1 className='headline-text'>Welcome</h1>
          <img src="https://univers.ug.edu.gh/cevubag/2023/05/photo_2023-05-17_01-43-44-860x515.jpg" alt="event img" />

          <div className="events-text">
            <h1 className='title-text-black' style={{marginLeft:"50px"}}>Mision & Vision</h1>
            <p className="body-text-light">To be the best center for technological research</p>
          </div>
        </div>

    </div>
  )
}