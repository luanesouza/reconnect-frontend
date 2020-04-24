import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import HomePage from './components/HomePage';
import UserLoginForm from './components/UserLoginForm';
import { registerUser,
        loginUser,
        getTherapists,
        getUserAppointments,
        createUserAppointment,
        editUserAppointment,
        deleteUserAppointment, } from './services/users';
import UserProfile from './components/UserProfile'
import TherapistList from './components/TherapistList'
import TherapistProfile from './components/TherapistProfile'
import AppointmentForm from './components/AppointmentForm';
import UserRegisterForm from './components/UserRegisterForm';


class App extends Component {
  state = {
    therapist: '',
    appointments: [],
    therapists: [],
    id: '',
    date: new Date(),
    time: '',
    therapist_id:'',
    therapist_image: '',
    therapist_last_name: '',
    therapist_first_name: '',
    education: '',
    specialty: '',
    user_id: 1,
    user_first_name: '',
    user_last_name: '',
    user_email: '',
    password: '',
    modalOpen: false,
    modalAppointment: false,
  }


  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  handleLogout = (e) => {
  e.preventDefault();
  this.setState({
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      password: ''
  })
  this.props.history.push('/');
  }

  handleChange = (e)  => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  handleRegister = async (ev)  => {
    ev.preventDefault();
    const { user_first_name, user_last_name, user_email, password } = this.state
    if ( user_first_name && user_last_name
      && user_email && password ) {
      try {
        const newUser = {
          user_first_name: this.state.user_first_name,
          user_last_name: this.state.user_last_name,
          user_email: this.state.user_email,
          password: this.state.password
        }
        const data = await registerUser(newUser);

        this.setState({
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            password: ''
        })
        this.props.history.push(`/profile`);
      } catch (e) {
        console.error(e, 'Something went wrong...');
      }
    } else {
      console.error('please fill out form');
      // logic works to not allow partially filled out forms to dispatch server call
      // need to know conditional render "please fill out form" as html if failure
    }
  };

  handleLogin = async (ev)  => {
    ev.preventDefault();
    const user_email = 'user@gmail.com';
    const password = 'aaaaa'
    localStorage.username = 'user'
      try {
        const resp = await loginUser({user_email, password})
        if(resp) {
          this.setState({
              user_email: '',
              password:''
          })
          this.props.history.push(`/profile`);
        } else {
          console.error('wrong username or password');
          // this needs user prompt so they can understand why login failed
        }
      } catch(e) {
        console.error(e, 'Someting went wrong...');
    };
  };

  getAppointments = async () => {
    const appointments = await getUserAppointments()

    this.setState({
      appointments
    })
  }

  getAllTherapists = async () => {
    const therapists = await getTherapists()

    this.setState({
      therapists
    })
  }

  getInfoAppointment = async () => {
    this.setState(prevState => ({
      modalAppointment:!prevState.modalAppointment

    }));
  };

  createAppointment = async (appointment) => {
    const data = await createUserAppointment(appointment)

    this.setState({
      appointments: [... this.state.appointments, appointment],

    })
    this.props.history.push('/profile')
  }

  cancelAppointment = async (appointmentId) => {
    try{
      const resp = await deleteUserAppointment(appointmentId)
      const appointments = await getUserAppointments();

      this.setState({
        appointments,
        modalAppointment: false
      })
    }catch(e){
      console.error(e.message);
    }
  }

  populateForm = async (appointment) => {

    this.setState(prevState => ({
      modalAppointment: !prevState.modalAppointment
    }))

    try{
    this.setState({
      date: appointment.date,
      time: appointment.time,
      id: appointment.id

    })
    }catch(e){
      console.error(e.message);
    }
  }

  rescheduleAppointment = async (e) => {
    e.preventDefault();
    try{
      const data = {
        date: this.state.date,
        time: this.state.time,
      }
      await editUserAppointment(this.state.id, data)
  } catch(e){
    console.error(e.message);
  }
  this.setState({
    time: '',
    modalAppointment: false
  })
  const appointments = await getUserAppointments();
    const newAppointment = appointments.sort();
    this.setState({
      appointments: newAppointment
  })
}

  handleRedirect = () => {

    this.setState({
      time: '',
      therapist_id: '',
      date: '',
      modalAppointment: false
    })
    this.props.history.push('/therapists')
  }

  handleCalendar = (date) => {
    this.setState(prevState => ({
        ...prevState,
        date
    }))
  }

  componentDidMount = async () => {
    await this.getAppointments();
    await this.getAllTherapists();
  }

  render() {
    return (
      <div className="App">
        <Route exact path ='/' render={(props) => (
            <HomePage { ...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleRegister}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              email={this.state.email}
              password={this.state.password}
              closeModal={this.toggleModal}
              />
        )} />

        <Route exact path='/scheduleAppointment' render={(props) => (
            <AppointmentForm
            {...props}
            handleChange={this.handleChange}
            handleSubmit={this.createAppointment}
            date={this.state.date}
            time={this.state.time}
            handleCalendar={this.handleCalendar}/>
        )} />

        <Route exact path ='/signup' render={(props) => (
            <UserRegisterForm
            {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleRegister}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              email={this.state.email}
              password={this.state.password}
              closeModal={this.toggleModal}/>
        )} />

        <Route exact path='/login' render={(props) => (
            <UserLoginForm
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleLogin}
              email={this.state.email}
              password={this.state.password}
              closeModal={this.toggleModal}
              isOpen={this.state.modalOpen}/>
        )} />

        <Route exact path='/profile' render={(props) => (
            <UserProfile
              appointments={this.state.appointments}
              cancelAppointment={this.cancelAppointment}
              populateForm={this.populateForm}
              date={this.state.date}
              time={this.state.time}
              rescheduleAppointment={this.rescheduleAppointment}
              handleChange={this.handleChange}
              handleRedirect={this.handleRedirect}
              therapist={this.state.therapist}
              modalAppointment={this.state.modalAppointment}
              therapists={this.state.therapists}/>
        )}/>
        <Route exact path='/therapists' render={(props) => (
            <TherapistList
            therapist={this.state.therapist}
            therapists={this.state.therapists}
            createNewAppointment={() => this.createNewAppointment}/>
        )} />
        <Route exact path='/therapists/:id' render={(props) => (
            <TherapistProfile
            therapist={this.state.therapist}
            getInfoAppointment={this.getInfoAppointment}
            handleChange={this.handleChange}
            handleSubmit={this.createAppointment}
            date={this.state.date}
            time={this.state.time}
            handleCalendar={this.handleCalendar}/>
        )} />
      </div>
    );
  }
}

export default withRouter (App);
