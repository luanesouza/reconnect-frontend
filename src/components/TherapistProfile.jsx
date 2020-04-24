import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserHeader';
import { Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import { getOneTherapist, createUserAppointment, getUserAppointments } from '../services/users.js';

function TherapistProfile(props){

  const [therapist, setInfo] = useState('')
  const [open, toggleModal] = useState(false)

  const [state, setState] = useState({
    date: new Date(),
    time: '07:30',
    therapist_id: therapist.therapist_id,
    therapist_image: therapist.therapist_image,
    user_id: 1,
    therapist_first_name: therapist.therapist_first_name,
    therapist_last_name: therapist.therapist_last_name,
  })

  useEffect( () => {
    therapistInfo()
  }, [])


const handleChange = (evt) => {

  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  props.handleSubmit(state)
}

const openModal = (evt) => {
  evt.preventDefault()
  toggleModal(!open)
}

const handleCalendar = (date) => {
  setState({
    ...state,
    date
  });
}




  const therapistInfo = async () => {
    let data = await getOneTherapist(parseInt(props.match.params.id))
    setInfo(data)

    setState({
      ...state,
      therapist_id: data.id,
      therapist_image: data.therapist_image,
      therapist_first_name: data.therapist_first_name,
      therapist_last_name: data.therapist_last_name
    });
    return data
  }





  return(
    <section className="TherapistProfile">
    <UserHeader />

      <section className="therapist-header">
        <h1>Dr. {therapist.therapist_first_name} {therapist.therapist_last_name}</h1>
        <section className='location-info'>
          <img src='https://image.flaticon.com/icons/svg/484/484167.svg' alt='location-icon'/>
          <p>{therapist.location}</p>
        </section>
        <img src={therapist.therapist_image} alt="therapist_img"/>
        <button onClick={(evt) => openModal(evt)}> { !open ? 'Schedule an Appointment' : 'Cancel'} </button>

      </section>
        <AppointmentForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          date={state.date}
          time={state.time}
          handleCalendar={handleCalendar}
          modalAppointment={open}
        />
      <section className='therapist-info'>

        <h3>Bio:</h3>
        <p>{therapist.bio}</p>
        <h3> Specialty:</h3>
        <p>{therapist.specialty}</p>
      </section>
    </section>
  )

}
export default withRouter(TherapistProfile);
