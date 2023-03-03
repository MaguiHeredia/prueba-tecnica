import React from 'react'
import '../styles/Card.css'

const Card = ({params}) => {
    return (
        <div className='card'>
            <img src={params.image} className='image-card'/>
            <div className='container-info'>
            <h3 className='title-card'>{params.name}</h3>
            <h6 className='subtitle-card'>{params.status} - {params.species}</h6>
            <p className='location'>Last known location:</p>
            <p className='info-location'>{params.location.name}</p>
            <p className='location'>First seen in:</p>
            <p className='info-location'>{params.origin.name}</p>
            </div>

        </div>
    )
}
export default Card