import React from 'react';
import { withRouter } from 'react-router';
import Calendar from 'react-calendar';
import TextField from '@material-ui/core/TextField'


function AppointmentForm(props){

  if (props.modalAppointment === false) {
    return null;
  }

  return(
  <form  onSubmit={props.handleSubmit}>
  <Calendar name='date' onChange={props.handleCalendar} value={props.date}/>
    <section className='timefield'>
       <TextField
          id="time"
          label=""
          type="time"
          name='time'
          value={props.time}
          onChange={props.handleChange}
          InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <button className="schedule-button" onClick={props.handleSubmit}> Schedule </button>
    </section>
   </form>
 )}
export default withRouter(AppointmentForm);
