/*contenido del navBar*/
//atajo para el componente NavBar : typear 'rafce'
//cada componente es una funcion flecha. 
import './styles.css'
import React from 'react'
//nombre del componente 'NavBar' para utilizarlo debe importarce en App.js

const NavBar = () => {
  return (
    <div className='nav'>
      
        <ul className='menu'> 
            <li className='item'>Home</li>
            <li className='item'>
                  Productos
                  <ul className='submenu'>
                      <li className='subitem'>Sillones</li>
                      <li className='subitem'>Mesas</li>
                      <li className='subitem'>Bazar</li>
                      <li className='subitem'>Deco</li>
                  </ul>
            </li>
            <li className='item'>Nosotros</li>
            <li className='item'>Contacto</li>
      </ul>
    </div>
  )
}

export default NavBar