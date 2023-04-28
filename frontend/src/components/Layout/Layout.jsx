import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import '../../App.scss'

const Layout = () => {
  return (
    <>
        <Header/>
        <div className='layout_setup-p ' >
            <Routers />
        </div>
        <Footer/>
    </>
  )
}

export default Layout