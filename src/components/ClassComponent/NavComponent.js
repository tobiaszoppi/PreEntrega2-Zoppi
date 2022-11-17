import { Component } from 'react'
import React from 'react'
import logo from '../../imgs/logo.png'
import '../../CSS/style.css'
import { Link, NavLink } from 'react-router-dom'

class NavComponent extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <NavLink to='/'>
            <h3 className='navbar-brand'>
              TobiShop
            </h3>
          </NavLink>

          <div
            className='collapse navbar-collapse visionNav'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink to='/'>
                  <h4 className='nav-link'>
                    Home
                  </h4>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='ItemDetailContainer'>
                  <h4 className='nav-link active'>
                    Detalles
                  </h4>
                </NavLink>
              </li>
              <li className='nav-item' >
                <NavLink to='Cart'>
                  <img src={logo} width='50px' alt=''></img>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavComponent
/**
 * className={({ isActive }) => (isActive ? 'active' : 'inactive')
            }
 * <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Producto
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href=''>
                  Action
                </a>
                <a className='dropdown-item' href=''>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href=''>
                  Something else here
                </a>
              </div>
            </li>
 */
