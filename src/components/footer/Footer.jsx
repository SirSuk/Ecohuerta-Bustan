import React from 'react'
import './FooterStyles.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className='col'>
                <h3>Explora nuestro menu</h3>
                <p>Menu</p>
                <p>Nutricion</p>
                <p>Ingredientes</p>
                <p>Bebidas</p>
            </div>
            <div className='col'>
                <h3>Conocenos</h3>
                <p>Sobre Nosotros</p>
                <p>Franquicia</p>
                <p>Empresas</p>
                <p>Objetivos</p>
            </div>
          
            <div>
                <h3>Let's connect</h3>
                <div className="social">
                    <FaFacebookSquare className='icon'/>
                    <FaTwitterSquare className='icon'/>
                    <FaInstagramSquare className='icon'/>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Footer