import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/navbar-logo.svg'
import userIcon from '../../assets/images/user-icon.png'
import './header.scss'

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'programsList',
    display: 'All Programs'
  },
  // {
  //   path: 'cart',
  //   display: 'Cart'
  // },
  {
    path: 'contacts',
    display: 'Contacts'
  },
]

const Header = () => {

  return <header className='header'>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <NavLink to = "home">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          
          <div className="navigation">
            <ul className="menu">
              {
                nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink 
                      to={item.path}
                      className = {(navClass) => 
                                    navClass.isActive ? 'nav__active' : ''
                                  }
                    >
                        {item.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__icons">
            <NavLink to ='favorites'>
              <span className="fav__icon" title='favorites' >
                <i className='ri-heart-line'></i>
                <span className="icon__counter">1</span>
              </span>
            </NavLink>
            <NavLink to='account'>
              <span className="user__icon" title='account'>
                <img src={userIcon} alt="" />
              </span>
            </NavLink>
            <NavLink to ='login'>
              <span className="fav__icon" title='login'>
                <i className="ri-login-circle-line"></i>
              </span>
            </NavLink>
            
          </div>
          
          <div className="mobile__menu">
            <span className="nav__burger">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header