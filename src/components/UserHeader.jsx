import React, { useState } from 'react';
import UserBrowserHeader from './UserBrowserHeader';
import UserMobileHeader from './UserMobileHeader';
let isMobile = window.innerWidth < 768;


function UserHeader(props){
  return(
    <>
    {
      isMobile ?
      
      <UserMobileHeader handleRedirect={props.handleRedirect} />
      :
      <UserBrowserHeader />
    }
    </>
  )
}

export default UserHeader;
