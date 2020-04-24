import React from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserHeader';

function TherapistAPIList(props){
  const {apiTherapists, getTherapist} = props
  return(
    <div>
     <UserHeader />
      <div className="therapistList">
       <br/>
       {apiTherapists.map(therapist => (
        <div className="therapistInfo" key={therapist.id}>
          <img className="therapist-img" src={therapist.therapist_image} alt="therapist-img" />
          <div className="name-location-specialty">
            <p className="therapist-list-info">Dr. {therapist.name} {therapist.therapist_last_name}</p> <br/>
            <p className="therapist-list-info">Location: <span>{therapist.location}</span></p>
            <p className="therapist-list-info">Specialty: <span>{therapist.specialty}</span></p>
            <button className="more-about-professional" onClick={(props) => getTherapist(therapist.id)}> More About This Professional</button>
          </div>
        </div>
      ))}
      </div>
    </div>
 )
}

export default withRouter(TherapistAPIList);
