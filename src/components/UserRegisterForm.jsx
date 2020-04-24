import React from 'react';

export default function UserRegisterForm(props){

  let isMobile = window.innerWidth < 768;

  return(
    <section className='userForm'>
      <form onSubmit={props.onSubmit}>
          <h1> Join Us </h1>
          <label>First Name</label>
          <input
            autoComplete="off"
            type="text"
            onChange={props.handleChange}
            id="first_name"
            name="user_first_name"
            value={props.first_name} />

          <label>Last Name</label>
          <input
            autoComplete="off"
            type="text"
            onChange={props.handleChange}
            id="last_name"
            name="user_last_name"
            value={props.last_name} />

          <label>Email</label>
          <input
            autoComplete="off"
            type="text"
            onChange={props.handleChange}
            id="email"
            name="user_email"
            value={props.email} />

          <label>Password</label>
          <input
            autoComplete="off"
            type="password"
            onChange={props.handleChange}
            id="password"
            name="password"
            value={props.password} />

        <button
          id='submitForm'
          onClick={props.handleSubmit}
          type="submit"
          >
            Sign Up
        </button>
        <br />
        {
          isMobile
          ?
          <a href='/login'>Already Have An Account?</a>
          :
          null
        }
      </form>
    </section>
  )
}
