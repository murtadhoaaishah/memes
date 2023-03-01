import React from 'react'
import "./MemeCard.css"

const MemeCard = ({ name, img }) => {
    return (
        <div className='meme'>
            <p>{name}</p>
            <img src={img} alt="" />
        </div>
    )
}

export default MemeCard
