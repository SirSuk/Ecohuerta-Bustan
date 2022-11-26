import React, {useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {GiFruitTree} from 'react-icons/gi'
import './NavbarStyles.css'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className='navbar'>
         <div className='container'>
            <div><GiFruitTree size={40} style={{marginLeft: '4px'}}/>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>Inicio</li>
                <li>Pedidos</li>
                <li>Menu</li>
                <li>Nosotros</li>
                <li>Contacta</li>
            </ul>
            <div className="hamburguer" onClick={handleNav}>
                {nav ? (<FaTimes size={20} style = {{color:'#ffffff'}}/>) : (<FaBars size= {20}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar