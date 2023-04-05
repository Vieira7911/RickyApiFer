import React from 'react'
import Fondo from '../Multimedia/Fondo.png'

import './Home.css'

const Home = () => {
    return (
        <div className='contenedorPrincipal'>
            <div className='info'>
                <div className='image'>
                    <img className='img1' src={Fondo} alt="Fondo" />
                </div>
            </div>
        </div>
    )
}

export default Home