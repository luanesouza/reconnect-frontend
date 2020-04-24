import React from 'react';
import {withRouter} from 'react-router';
import AppointmentForm from './AppointmentForm';
import Appointment from './Appointment';

function AppointmentList(props){
  const {appointments, cancelAppointment, populateForm, getInfoAppointment} = props

  let myAppointments = appointments.map(appointment => (
      <Appointment
        key={appointment.id}
       populateForm={populateForm}
       cancelAppointment={cancelAppointment}
       appointment={appointment}
       />))

  return(
    <main className="AppointmentList">
      <section >
        {
          appointments.length === 0
          ?
            <p> You do not have any appointments coming up </p>
          :
            appointments.length === 1
            ?
            <p> You have {appointments.length} appointment comming up </p>
            :
            <p> You have {appointments.length} appointments comming up </p>
        }
        { myAppointments }
      </section>
      {
        true
        ?
        <section className="calendar-form">
          <AppointmentForm
            handleChange={props.handleChange}
            handleCalendar={props.handleCalendar}
            handleSubmit={props.rescheduleAppointment}
            time={props.time}
            modalAppointment={props.modalAppointment}
            />
        </section>
        :
        null
      }
    </main>
  )
}
export default withRouter(AppointmentList);
