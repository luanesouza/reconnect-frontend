import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function UserBrowserHeader(){
    const currentPath = window.document.location.pathname;

  return(
    <nav>
      {
        currentPath === '/profile'
        ?
        null
        :
        <section className='nav-icons'>
          <NavLink
            to='/profile'
            activeClassName="active">
            <img
              src='https://image.flaticon.com/icons/svg/747/747545.svg'
              alt='profile' />
            My Profile
          </NavLink>
        </section>
      }
      {
        currentPath === '/therapists'
        ?

        null
        :

        <section className='nav-icons'>
          <NavLink
            to='/therapists'
            activeClassName="active">
            <img
              src='https://image.flaticon.com/icons/svg/2150/2150407.svg'
              alt='browse' />
            View All Therapists
          </NavLink>
        </section>
      }
        <section className='nav-icons'>
          <NavLink
            to='/'
            activeClassName="active">
            <img
              src='https://image.flaticon.com/icons/svg/1287/1287004.svg'
              alt='logout'/>
            Logout
        </NavLink>
        </section>
    </nav>
  )
}
