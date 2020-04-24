import React from 'react';
import moment from 'moment';


export default function Appointment({appointment, populateForm, cancelAppointment}) {
  
  return (
    <div className="appointment-card" key={appointment.id}>
      <img id='therapist-icon' src={appointment.therapist_image} alt="therapist"/>
      <section className='doctor-info'>
        <p>Dr. </p> <span> {appointment.therapist_first_name} {appointment.therapist_last_name}</span>
        <p>Appointment Date:</p><span>{moment(appointment.date).format("MMM Do YYYY")}</span>
        <p>Appointment Time:</p> <span>{appointment.time}</span>
      </section>

      <section className='appt-settings'>
        <button className="reschedule-app-button" onClick={(props) => (populateForm(appointment))}>
          <img id='appt-settings' src='https://image.flaticon.com/icons/svg/1254/1254238.svg' alt="appt-settings"/>
        </button>
        <button className="cancel-app-button" onClick={(props) => (cancelAppointment(appointment.id))}>
          <img src='https://image.flaticon.com/icons/svg/753/753345.svg' />
        </button>
      </section>
    </div>
  )
}
