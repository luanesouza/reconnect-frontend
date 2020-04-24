import React, { useState } from 'react';
import UserRegisterForm from './UserRegisterForm';
import UserLoginForm from './UserLoginForm';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  const [rendered, isFormRendered] = useState('signup')
  let isMobile = window.innerWidth < 768;

    const renderForm = () => {

      if(isMobile){
        return(
          <a href='/login'> Already Have An Account? Login </a>
        )
      } else {
        if(rendered === 'signup') {
          return(
            <button
              id='renderForm'
              onClick={(e) =>
                {e.preventDefault();
                isFormRendered('login')}}>
                Already Have an Account? Login Instead
                </button>
          )
        }else if(rendered === 'login') {
          return(
            <button
              id='renderForm'
              onClick={(e) =>
                {e.preventDefault();
                isFormRendered('signup')}}>
                Register Instead
                </button>
          )
        }

      }
    }

  return(
    <main className='HomePageContents'>
      <section className='HomePage'>
        <section className='homepage-image-text'>
          <img src='https://image.flaticon.com/icons/svg/1491/1491373.svg' alt='logo'/>
          <span id='re'>Re</span><span id='connect'>connect</span>
        </section>
        {
          isMobile
          ?
          <>
            <button onClick={(e) => {e.preventDefault(); props.history.push('/signup')}}> Talk to a Therapist </button>
            <a href='/login'> Already Have An Account? Login </a>
          </>
          :
          renderForm()
        }
      </section>
      {
        isMobile
        ?
        null
        :
        rendered === 'signup'
        ?
        <UserRegisterForm {...props}/>
        :
        <UserLoginForm
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        />
      }

    </main>
  )
};

export default HomePage;
