import React from 'react'

import './Hero.css'

const Hero = ({label}) => {
    return (
        <div className='hero'>
            <div>Home {'>'} {label}</div>
        </div>
    )
}

export default Hero
