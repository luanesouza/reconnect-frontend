import React from 'react';


export default function Therapist({therapist, getTherapist}) {

  return (
    <a href={`/therapists/${therapist.id}`}>
      <section className='appointment-card' key={therapist.id}>
        <img id='therapist-icon' src={therapist.therapist_image} alt="therapist-img" />
        <section className='therapist-info'>
          <p>Dr. {therapist.therapist_first_name} {therapist.therapist_last_name}</p>
          <p>Location: <span>{therapist.location}</span></p>
          <p>Skype: <span>{therapist.therapist_skype}</span></p>
        </section>
      </section>
    </a>
  )
}
