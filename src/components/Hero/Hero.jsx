import React from 'react'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
         <div className='container'>
            <div className='content'>
                <div className='text'>
                    <p>Bustan Radif</p>
                </div>
                <h1> Alimento </h1>
                <h1> Ecológico</h1>
                <button className='btn'>Pedidos</button>
                <button className='btn'>Contacto</button>
            </div>
        </div>
    </div>
  )
}

export default Hero