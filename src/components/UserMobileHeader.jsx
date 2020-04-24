import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserMobileHeader(props){
  const [open, isMenuOpen] = useState(false)
  const currentPath = window.document.location.pathname;
  return(
    <div className="UserHeader">
      <section className="HeaderMobile">
        {
          localStorage.username && currentPath === '/profile'
          ?
          <h2> Welcome, {localStorage.username}</h2>
          :
          <h2></h2>
        }

        <button onClick={(e) => {e.preventDefault(); isMenuOpen(!open) }}
          className='menu'>
          <img src='https://image.flaticon.com/icons/svg/2089/2089793.svg' alt='mobile-menu'/>
        </button>
      </section>
        {
        open

        ?
            <section className='dropdown-menu'>

              {
                currentPath === '/therapists'
                ?
                null
                :
                <p>
                  <Link to='/therapists'>View All Therapists </Link>
                </p>
              }

              {
                currentPath === '/profile'
                ?
                null
                :
                <p>
                  <Link to='/profile'>View Profile </Link>
                </p>
              }

              <p>
                <Link to='/'>Logout </Link>
              </p>

            </section>
        :
        null
        }
    </div>
  )
}

export default UserMobileHeader;
