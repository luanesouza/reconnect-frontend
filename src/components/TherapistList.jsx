import React from 'react';
import { withRouter, Route } from 'react-router';
import UserHeader from './UserHeader';
import Therapist from './Therapist';
import TherapistProfile from './TherapistProfile';

function TherapistList(props){

  const {therapists, getTherapist} = props
  return(
    <section className='TherapistListClass'>
     <UserHeader />
      <section className="therapistList">
       {therapists.map(therapist => (
        <Therapist
          getTherapist={getTherapist}
          therapist={therapist}
          />
      ))}
      </section>
    </section>
 )
}

export default withRouter(TherapistList);
