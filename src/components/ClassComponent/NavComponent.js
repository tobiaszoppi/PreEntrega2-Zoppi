import { Component } from 'react'
import React from 'react'
import logo from '../../imgs/logo.png'
import '../../CSS/style.css'
import { Link, NavLink } from 'react-router-dom'

class NavComponent extends Component {
  render () {
    return (
      <nav className='nav navbar navbar-expand-lg bg-white' height='10vh'>
        <div className='container-fluid'>
          <NavLink to='/' activeClassName="currentCategory" className="text-black">
            <h1>TobiCompany</h1>
          </NavLink>
          <ul className='nav nav-tabs'>
            <Link to='/'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href=''>
                  Inicio
                </a>
              </li>
            </Link>
            <Link to='Productos'>
              <li className='nav-item'>
                <a className='nav-link' href=''>Productos</a>
              </li>
            </Link>
            <Link to='ItemDetailContainer'>
              <li className='nav-item'>
                <a className='nav-link' href=''>Informacion</a>
              </li>
            </Link>

            <Link to='/cart'>
              <img src={logo} width='50px' alt='' className='cart'></img>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavComponent
/**
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
