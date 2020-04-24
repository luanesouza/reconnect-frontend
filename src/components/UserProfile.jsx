import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import AppointmentList from './AppointmentList';
import UserHeader from './UserHeader';
import UserBrowserHeader from './UserBrowserHeader';

function UserProfile(props){

  return(
    <main className='UserProfile'>
      <UserHeader handleRedirect={props.handleRedirect}/>

      <AppointmentList
        appointments={props.appointments}
        cancelAppointment={props.cancelAppointment}
        date={props.date}
        time={props.time}
        populateForm={props.populateForm}
        modalAppointment={props.modalAppointment}
        rescheduleAppointment={props.rescheduleAppointment}
        handleChange={props.handleChange}/>

  </main>
)}
export default withRouter(UserProfile);
