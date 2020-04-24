import React from 'react';
import { withRouter } from 'react-router-dom';

const UserLoginForm = (props) => {
  let isMobile = window.innerWidth < 768;
  return(

    <div className="userForm">
       <form onSubmit={props.onSubmit}>
        <h1> Welcome Back </h1>
        <label name='email'> Email </label>

        <input
        autoComplete="off"
        type="text"
        id="email"
        name="user_email"
        value='user@gmail.com' />

        <label name='password'> Password </label>

        <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        value='aaaaa'/>

        <button
        id='submitForm'
        onClick={(evt) => { props.handleSubmit(evt); props.history.push('/profile')}}
        type="submit"
        >
          Log In
        </button>
        {
          isMobile
          ?
          <a href='/signup'>Join Us</a>
          :
          null
        }
      </form>
    </div>
  )
};

export default withRouter(UserLoginForm);
